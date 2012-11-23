import urllib2
from xml.dom.minidom import parse, parseString
import web
import json

urls = (
    '/(.*)', 'getData'
)


class getData:
    def GET(selfself,name):
        data = urllib2.urlopen('http://hdv.bype.org/cgi-bin/coutFile.cgi?fileName=/tmp/sensordata.xml')
        dom = parse(data)
        values = dom.getElementsByTagName('value')
        d ={};
        d[u'TIN'] = int(values[0].firstChild.nodeValue)
        d[u'TOUT'] = int(values[1].firstChild.nodeValue)
        d[u'RAY'] = int(values[2].firstChild.nodeValue)
        
        data = urllib2.urlopen('http://hdv.bype.org/cgi-bin/coutFile.cgi?fileName=/tmp/systemdata.xml')
        dom = parse(data)
        if dom.getElementsByTagName('dataAvailable')[0].firstChild.nodeValue == u'true':
            current = dom.getElementsByTagName('current')[0].childNodes
            for v in current:
                d[v.tagName]=float(v.firstChild.nodeValue)
        web.header('Content-Type', 'application/json')
        return json.dumps(d)

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()
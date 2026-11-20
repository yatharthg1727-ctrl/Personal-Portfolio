// Zero-dependency static server: run with `node server.js` (or `npm start`)
const http=require('http'),fs=require('fs'),path=require('path');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.pdf':'application/pdf'};
const port=process.env.PORT||3000;
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);if(p==='/')p='/index.html';
  const f=path.join(__dirname,path.normalize(p));
  if(!f.startsWith(__dirname)){res.writeHead(403);return res.end('Forbidden')}
  fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);return res.end('Not found')}
    res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});res.end(d)});
}).listen(port,()=>console.log('Portfolio running at http://localhost:'+port));

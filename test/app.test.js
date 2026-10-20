const test=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');
test('project contains expected runtime files',()=>{for(const f of ['server.js','package.json','public/index.html','public/styles.css','public/app.js','README.md'])assert.ok(fs.existsSync(path.join(__dirname,'..',f)),`${f} exists`)});
test('package scripts expose start and test',()=>{const p=JSON.parse(fs.readFileSync(path.join(__dirname,'..','package.json'),'utf8'));assert.equal(p.scripts.start,'node server.js');assert.equal(p.scripts.test,'node --test')});

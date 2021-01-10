var buf=Buffer.alloc(256);
len=buf.write("test buff");
console.log("write:",len);


console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
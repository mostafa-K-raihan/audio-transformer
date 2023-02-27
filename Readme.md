## Usage
### Cut files
-------------

 ```js
 node main.js --clip --input "${input file path}" --output ${output file path} --seek 0 --to 0:10:26
```

```js
npx simple-ffmpeg-wrapper --input ${input file path} --output ${output file path} --clip --ss 0:00:00 --to 0:08:00
```

seek => seek to position to start cutting
to => duration e.g file should be of length: seek => seek + to basically to refers to duration

needs to update the API


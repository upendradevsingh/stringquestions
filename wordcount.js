function getWordCount(fileContent){

  var wordCounts = { };
  var words = fileContent.split(/\b/);
  
  for(var i = 0; i < words.length; i++)
      wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
      
  return wordCounts;
    
}

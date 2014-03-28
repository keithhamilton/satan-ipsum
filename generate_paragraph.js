function generate_paragraph(count){
    output='satan ipsum ';
    for(var p=0;p<count;p++){
        var paragraph = '';
        var paragraph_sentence_count=randomInRange(paragraph_min_sentences,paragraph_max_sentences)
        for(var i=0;i<paragraph_sentence_count;i++){
            var sentence='';
            var sentence_length = randomInRange(sentence_min_length,sentence_max_length);
            for(var j=0;j<sentence_length;j++){
                var index = randomInRange(0,words.length);
                sentence+=words[index];
                if(j < sentence_length-1){
                    sentence+=' ';
                }
            }
            sentence += '. ';
            paragraph+=sentence;
        }

    output+=paragraph;
    output+='\n';
    
    }
    return output;
}
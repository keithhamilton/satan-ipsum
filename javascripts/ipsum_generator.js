var Generator = (function(){
    var _words= ['satan', 'hatred', 'blackness', 'blood', 'rivers of blood', 'fire', 'pain', 'wheel of pain', 'burned alive', 'eternity', 'desecrated souls', 'hopeless', 'lightbringer', 'unending torture', 'darkness eternal', 'cloven feet', 'pitchfork', 'infinite abyss', 'nine circles', 'natas', 'circling demons', 'Old Nick cometh', 'black mass', 'Lucifer', 'Beelzebub', 'chief of demons', 'bow before the deceiver', 'devourer of souls', 'lies', 'deceiver', 'Abbadon', 'dark prince', 'Morningstar', 'pit of snakes', 'drinking blood', 'undying agony', 'suffering', 'everlasting fire', 'torment unending', 'inferno', 'place of the condemned', 'forever punished', 'excruciating flame', 'agonizing', 'bottomless pit of the damned'];
    var _paragraph_min_sentences= 2;
    var _paragraph_max_sentences= 6;
    var _sentence_min_length=5;
    var _sentence_max_length=15;

    function _randomInRange(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }

    function _generateParagraph(count,sentenceVariance){
        var _sentence_min = _sentence_min_length-sentenceVariance;
        var _sentence_max = _sentence_max_length+sentenceVariance;

        var _output='';
        for(var p=0;p<count;p++){
            var _paragraph='';

            var _paragraph_sentence_count=_randomInRange(_paragraph_min_sentences,_paragraph_max_sentences)
            for(var i=0;i<_paragraph_sentence_count;i++){
                var _sentence='';
                var _sentence_length = _randomInRange(_sentence_min,_sentence_max);
                var _last_word_index=0;
                for(var j=0;j<_sentence_length;j++){
                    var _index = _randomInRange(0,_words.length);
                    //if the index is the same as the last index pick another one.
                    while(_index === _last_word_index){
                        _index = _randomInRange(0,_words.length);
                    }
                    _last_word_index=_index;

                    _sentence+=_words[_index];
                    if(j < _sentence_length-1){
                        _sentence+=' ';
                    }
                }
                _sentence += '. ';
                _sentence = _sentence[0].toUpperCase() + _sentence.substring(1,_sentence.length);
                _paragraph+=_sentence;
            }

        if(p === 0){
          _paragraph = "Satan ipsum " + _paragraph[0].toLowerCase() + _paragraph.substring(1,_paragraph.length);
        }    
        _output+=_paragraph;
        _output+='<br/><br/>';
        
        }
        return _output;
    }

    return{
        randomInRange: _randomInRange,
        generateParagraph: _generateParagraph
    }
})();



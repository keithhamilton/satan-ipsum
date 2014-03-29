var Generator = (function(){
    var _words= ['satan', 'hatred', '666','blackness', 'blood', 'rivers of blood', 'fire', 'pain', 'wheel of pain', 'burned alive', 'eternity', 'desecrated souls', 'hopeless', 'lightbringer', 'unending torture', 'darkness eternal', 'cloven feet', 'pitchfork', 'infinite abyss', 'nine circles', 'natas', 'circling demons', 'Old Nick cometh', 'black mass', 'Lucifer', 'Beelzebub', 'chief of demons', 'bow before the deceiver', 'devourer of souls', 'lies', 'deceiver', 'Abbadon', 'dark prince', 'Morningstar', 'pit of snakes', 'drinking blood', 'undying agony', 'suffering', 'everlasting fire', 'torment unending', 'inferno', 'place of the condemned', 'forever punished', 'excruciating flame', 'agonizing', 'bottomless pit of the damned','indulgence aplenty','abase yourself before the defiler','vengeance','the great dragon awaits','chains of gloomy darkness','mighty voices of vengeance','messenger of doom','Shehamforash'];
    var _enochian = ['casarem ohorela','caba Pire','zodomeda','Micama! goho Pe-IAD!','vaomesareji elonusa','vaunalahe','panupire','cocasabe fafenu','dasata ca-pi-mali cahisa','elonusahinu cahisa','Conisabera od auauotza tonuji oresa','qurelesata','oucaho sayomepe','yorepoila tiobela busadire','adoianu','gohulime','od fifisa balzodizodarasa','Vanucahi omepetilabe oresa!','Tonu paomebeda dizodalamo','iadanamada','Noco Mada, hoathahe Saitan','od cicale Qaa','noasa ta qu-a-nis','ipezodi','oeli meapeme','cahisa'];
    var _paragraph_min_sentences= 2;
    var _paragraph_max_sentences= 6;
    var _sentence_min_length=5;
    var _sentence_max_length=25;

    function _randomInRange(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }

    function _generateParagraph(count,sentenceVariance,includeEnochian,enochianWeight){
        var _sentence_min = _sentence_min_length-sentenceVariance;
        var _sentence_max = _sentence_max_length+sentenceVariance;
        var _wordsArray = includeEnochian ? _words.concat(_enochian) : _words;
        var _output='';

        // increase enochian weight if above one and includeEnochian
        if(includeEnochian){
            switch(enochianWeight){
                case 2:
                case 3:
                    do{
                        _wordsArray.concat(_enochian);
                        enochianWeight--;
                    } while(enochianWeight > 1);
                    break;
                default:
                    break;
            }
        }
        // randomize array order
        _wordsArray.sort(function() {
          return .5 - Math.random();
        });

        for(var p=0;p<count;p++){
            var _paragraph='';

            var _paragraph_sentence_count=_randomInRange(_paragraph_min_sentences,_paragraph_max_sentences)
            for(var i=0;i<_paragraph_sentence_count;i++){
                var _sentence='';
                var _sentence_length = _randomInRange(_sentence_min,_sentence_max);
                var _last_word_index=0;
                for(var j=0;j<_sentence_length;j++){
                    var _index = _randomInRange(0,_wordsArray.length);
                    //if the index is the same as the last index pick another one.
                    while(_index === _last_word_index){
                        _index = _randomInRange(0,_wordsArray.length);
                    }
                    _last_word_index=_index;

                    _sentence+=_wordsArray[_index];
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



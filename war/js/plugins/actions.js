var 	helo;
var 	base64s 			=  		    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var 	need 				= 			new Array();
var 	translateArray 		=			new Array();
var 	meaningArray 		= 			new Array();
var 	filterflag			=		    false;


					var listen=
					[ 
						  'About four hundred and eighty years ago  Andhra Pradesh state  in the, a small  village  a poor Brahmin family  birth  thenaliraman',
						  'young he  his father loose',
						  'so he his Mother thenali the In town Lives the his Maternal uncle In support of Living',
						  'thenaliraman school Go Reading like neemseed Hated',
						  'but The most Intelligence Comedy Can speak Ability Naturally Acquired',
						  'head of the family absence reason family Save need situation thenaliraman Occurred',
						  'so what do sorrow',
						  'oneday thenali one sage come',
						  'he raman After seeing the state  he  preach one mantra',
						  'that mantra With devotion  pray  kaali',
						  'By this way rama  to town out kali temple went to sage preach that mantra 108 times depicts',
						  'kaali not visible. raman think',
						  'suddenly his remember Sage said thousand eight times',
						  'Immediately again eyes closed kaali pray started',
						  'Night come',
						  'but raman kaali temple leave',
						  'suddenly kaali his opposite appear',
						  'Me why called? You what want?  Angrily asked  kaali.',
						  'his  Worship Get up rama Hands pray asked.',
						  'oh mother am   hardship starve',
						  'my poverty eradicate Option Me  good knowledge give Requesting',
						  'Kali tremendous  smile',
						  'for you greedy',
						  'Education  need  Wealth Do you want ?',
						  'yes mother for renown education need.',
						  'hardship Divested things need',
						  'Both give bless do need, told raman.',
						  'Kaali with a smile,  to her two hands shown.',
						  'that two bowls milk come',
						  'that bowls raman give kaali',
						  'rama! this two bowls inside milk most special.',
						  'right bowl education',
						  'Left bowl Wealth',
						  'you one bowl inside milk only drink',
						  'you which most need that bowl milk only drink said by her with smile.',
						  'raman " what mother me both two only asked.',
						  'one bowl only drink asked.',
						  'I which drink dont know  some time think like stand',
						  'After suddenly left hand milk right hand bowl poure . that bowl milk  drink and smile.',
						  'kaali stunned stand',
						  'I you one bowl milk only drink said.',
						  'yes mother,  me one bowl milk only drink',
						  'why both mix together?',
						  'dont mix  you didnot inform me mother',
						  'Kaali smile furious',
						  'rama! me cheat',
						  'you great poet name dont get vigadakavi name get said boon and disappear. ',
						  'raman vigadakavi  said and smiled',
						  'reverse and read vigadakavi remains same and get happy.'
					]

					var listen2 = 
					[
							' king krishnadevarayar birthday festival',
							' city fully festoon decoration ,house fully decorations.',
							' People his birth day same king birth day with happy celebrate',
							' first day night street dance song Concerts, fireworks.', 
							' Palace foreign countries come they treat indulgencely happen',
							' next day durbar king honouring ceremony  happen',
							' initially foreign country chief  its own king deliver  gift give',
							' next chief, people king gift gave honoured gave',
							' Afterwards king close friends gifts Furnish.',
							' At  that time With a big packet thenaliraman inside Enter',
							' king Including all  exclaimed with wonder with watch',
							' Others gifts got his close to king',
							'  thenaliraman bring that gift package large So inside the durbar  surprisingly what gift Seeing that packet open thenaliraman said king',
							' thenaliraman  Hesitate without package open. keep continuous.',
							' open open sarufine lobes under the foot reached but gift thing what dont know',
							' so all wistfull with notice',
							' Finally small packageopen',
							' Then Well ripened dried tamarind fruit one is there.',
							' durbar tease laughed',
							' king ordered to stop smile , thenaliraman give gift small may',
							' he  will give description isnt it? durbar look said thenaliraman side turn rama this small thing choosen reason what asked by him',
							' oh king one country ruling king how it should be  like that Theory fruit tamarind only',
							' King to be tamarind tree unripe fruit like ',
							' he fruit taste like sweater to be',
							' by the same time Wishes tamarind fruit shell donot paste to be Explain how this tamarind fruit gift I came up with',
							' as like tamarind fruit and its shell said by him',
							' durbar people clapped his hands Cheer .',
							' king eyes throne stand thenaliraman Embrace, rama for me  teaching good knowledge',
							' one birthday function  this much extravagant Not required',
							' Treasure(special) money public soul waste do',
							' suddenly celebrations stop',
							' hereafter my birthday time temple only Worship perform',
							'without money luxury spend dont do that..he ordered.',
							' Thenaliraman CourageTact everyone praised.',
							' king him got gift thing cost high pick and give to thenaliraman gift give.'
					];
					var listen3 = [
							' one time vijaya Kingdom Severe Drought happen',
							' seasonal rain  missed Pool , pond , lake all Dried',
							' Thenaliraman home  in the well Decreasing  more deep gone.',
							' for  that daily Backyard water Struggled to irrigate thenaliraman',
							' In this case one day night four thief his Backyard Found themselves in ambush',
							' suddenly his home come his wife , hey  our country monsoon rain missed famine There is a',
							' so lot theft started .',
							'famine time end me most careful ',
							' so we one Thing Let out Thieves hiding out in a  thief loud voice to hear me.',
							' for that what to do? asked thenaliraman wife',
							' Household\'s jewelry , and precious things to put in the box lock',
							' Let us  leave this hideously well', 
							' Famine exhausted stolen again from the well ceased to fear , "he said loudly tenaliraman before',
							' So crooks',
							' At the same time secretly tenaliraman  thieves claiming his wife in an old box of stone, sand , and covered at all of the old stuff .',
							' That box is too weight so he left into the well and returned to home',
							'  for thief also Crooks Tenaliraman , broke into the house and stealing our work easier',
							' We can easily take the box from the well Engage with the', 
							'  box take the well the close  came to  Thieves',
							'  As Well depth  inside timid theif There  water  Less than',
							' we all four with the help of   pulley water laid down it is easy box keep with go said by him',
							' after hearing that  others he plan agreed  ',
							' By this way one by one pump using water started',
							' after some time In a different way  Backyard go thenaliraman, thief  Giving water poured his backyard inside plants creepers crops Canal turne',
							'  So when it has dawned',
							' but well water  Not less than.',
							' for that thief tomorrow night again you come and  Giving away water take box. told by all and went',
							' that time backyard thenaliraman they saw tomorrow you wont come',
							' For you unavailing water three days enough',
							' so three days left come and enough . ',
							'for your help thank you friends said by him.',
							' Thief after hearing lot Shame',
							' For cheat water laid down did thenaaliraman Knowledge Counting amazed mind',
							'  More If there  where Trapped fear turned ran out thief.'
				];
					var morphopart = [
			                  'About four hundred and eighty years ago Andhra Pradesh state in the, a small  village  a poor Brahmin family  born thenaliraman',
			                  'when was young he his father lost.',
			                  'so he and his mother lived in thenali in the support of his maternal uncle.',
			                  'Thenaliraman for school it  was very hard to study.',
			                  'But he  intellegence and comedy sense of speech  naturally acquired.',
			                  'owing to his fathers absense family had been compelled to look after thenaliraman.',
			                  'so what to do he worried.',
			                  'oneday  Thenali a sage came.',
			                  'his looking  at state of rama  he preached a mantra.',
			                  'By Depicting this mantra  lord kaali will appears he said.',
			                  'owing to this raman  residing outside of his place also went kaali temple sage preached the mantra 108 times  and depicts .',
			                  'kaali  does not appears that raman thought.',
			                  'Suddenly he remembers  that the sage  had said 108 times ',
			                  'Immediately he closed his eyes and again started praying for kaali.',
			                  'Night has arrived',
			                  'But  also rama  kaali temple didnot left',
			                  'Kali suddenly appeared in front of him',
			                  'Why did you call me ? What do you want? " Angrily  Kali asked',
			                  'By kaali after being blessed  raman asked by holding his hands.',
			                  'oh mother!  am starving in hardship.',
			                  'I am  appealing my  hardship to eradicate and to enhance my knowledge.',
			                  'kaali tremendously laughed',
			                  'you are  too greedy',
			                  'Education and wealth both  do you need?',
			                  'yes mother .. for renown  attain education required .',
			                  'hardship  to eradicate wealth is needed.',
			                  'both  with me  bless  ,said raman',
			                  'kaali with smile her both hands  has shown',
			                  'There were two bowls of milk',
			                  'the bowls to raman gave kaali',
			                  'rama these both bowls in milk very special.',
			                  'Right side bowl represents Education',
			                  'Left side bowl indicates wealth',
			                  'you one  bowl  of milk only  have to drink ',
			                  'what you actually need that  much bowl milk only you drink", she said with smile.',
			                  'raman what mother I both asked.',
			                  'bowl only one drink she asked',
			                  'I dont know what to drink" as he stood like thinking for a while',
			                  'which all of a sudden  left hand bowls milk to right hand bowl he poured  and bowls milk drank vigorously and smiled.',
			                  'kaali were stunned',
			                  'I  you only one bowl of milk to  drink told',
			                  'yes mother me one bowl of milk drank said by him',
			                  'why do you mixed together?',
			                  'mix or not you did not inform me',
			                  'kaali smiled furiously.',
			                  'rama!  you cheated me itself',
			                  'you great poet not earn the name , rather  you will be named as vigadagavi:, she blessed and disappeared.',
			                  'raman vigadakavi  after saying himself laughed.',
			                  'even it is reversly read vigadakavi remains same he exclaimed.',
			              ];
					var morphopart2 = [
								' king krishnadevarayar"s birthday',
								' The entire city has been decorated with festoon,house has also been decorated.',
								' people their birthday as  same as king birthday happily celebrated.',
								'  On the first day night in the streets dance concerts and fireworks have been explored.',
								'  palace foreign country  who came from  treated indulgencely.',
								' next day in durbar for the king honouring ceremony happened.',
								' Initially who came from foreign cheif of the state their kings own gifts.',
								' next cheif of the state  people the king gifts gave honoured.',
								' Afterwards  kings close friends their gifts  respective gave.',
								'  At  that time  with big package thenaliraman enters.',
								' including the king everyone exclaimed with wonder.',
								'   others gifts who received kept closer.',
								' Thenaliraman brought a  gift package big  so people in durbar looked him surprisingly what  would be the gift and to open the package asked king',
								' Thenaliraman without any hesitation started opening the package continuously.',
								' after opening the package appears sarufine lobes rather gift appropriate is not identified.',
								' so everyone wistful noticed',
								' finally very small packet he opened.',
								'  Inside that  well dried tamarind fruit is there.',
								' durbar people laughed',
								' king signed his hand thereby thenaliraman presented by gift  may be smaller.',
								' the major reason for that is to be larger?  pointed to people  in durbar afterwards rama small package reason what? asked by king.',
								' oh king  rules country would be a king how based upon tamarind fruit only.',
								' King is like a tamarind fruit in the  tree ',
								' he flavor of the fruit as to be sweet.',
								' At the same time  to any personal wishes alike tamarind fruit shell one should not stick. In order to explain this, tamarind gift  brought.',
								' tamarind seed and its shell you he said.',
								'  Peoples in durbar clapped their hands and cheered',
								' king  from his throne stood thenaliraman embraced "rama you have good lesson thought"',
								'  Birthday party so extravagant you donot need',
								'  Treasures money as well as peoples heart have been wasted.',
								' suddenly celebrations stop',
								' hearafter  on my birthday temple only offering worship has to be done.',
								' Without any need donot waste money he ordered',
								' thenaliraman\'s courage, tact praised by everyone.', 
								' king received gifts richestone to thenaliraman gifted.'
						 ];
				var morphopart3 = [
								' At one time kingdom of vijayanagar severe drought there was',
								' monsoon failed due to pool pond lake all dried.',
								' Thenaliraman house  well  level of the water very deep goes.',
								'  For that backyard irrigate struggled thenaliraman.',
								' At this night time four thieves his backyard sneaked he has found.',
								' suddenly come to his home his wife  our country monsoon failure famine led',
								' so a lot of theft has started.',
								'famine time until the end of we have to be very happy.',
								' " let us do this" that theives who were hiding outside can hear this he shouted.',
								'  for that what to do? asked his wife',
								' In the home jewel and precious things are in this box locked.', 
								' let us box in to the well drop.',
								' famine devasting and theft fear will get back again from well shouted thenaliraman',
								' theives also heared this.',
								' At the same time  secretly thenaliraman his wife initimated that the theifs were hidden and he put stone , sand , oldthings kept in an old box.',
								'  the weighted box is to be dropped into the well and  his home returned thenaliraman.',
								'  The thief  Thenaliraman his house entering his home and robbing made our job easier.',
								' We easily from the well box  the thieves had talked themselves.',
								' box take the near well the theives.',
								' well depth feared the thief and said oh brother water level is low only.',
								' we four can the water using pulley water drown we can easily from the well the thief said.',
								' By hearing this to this plan all agreed.',
								' so one after one started to  pulley water drown',
								' After some time in different way backyard thenaliraman  theives drowned water by the theives plants,creepers ,and the crops can be changed.',
								' the day has been dawned.',
								' But the level of water not been decreased.',
								' hence the thief  tomorrow night to return back again for taking the box .',
								' At that time backyard thenaliraman returned dont come tomorrow.',
								' yoours drowned water is still for three days enough.',
								' so it is come after three days enough',
								'for your help thanks he said.',
								' the thief also felt shame after hearing this',
								' by cheating them water drown thenaliraman intelligency  exclaimed.',
								' also they will be caught by staying here feared running started from there thieves.'
							];
					var WOA = [
								' About four hundred and eighty years ago, a small village residing in andhra pradesh, thenaliraman was born in poor brahmin family.',
								' when he was young he lost his father.',
								'  so,In the support of his maternal uncle thenaliram and his mother lived in thenali.',
								' For thenaliraman it was very hard to study in school.',
								'  but he naturally acquired, intelligence and comedy sense of speech.',
								' Owing to his father’s absence thenaliraman has been compelled to look after his family.', 
								' so  he worried, what to do ?',
								' One day, a sage came to Thenali .',
								' looking at his state of rama he preached  a mantra.', 
								' He said that by depicting this manthra lord kali will appears',
								' owing to this, raman also went to kaali temple that is residing outside of his place and depicts the mantra for 108 times which was preached by the sage.',
								' Raman thought  that kaali does’t appears ',
								'Suddenly he remembers that the sage had said 108 times',
								' Immediately he closed his eyes again and started praying for  kaali.',
								' Night has arrived .',
								' But also Rama  didn’t left Kaali temple', 
								' suddenly kaali  appeared in front of him ',
								' Why did you called me ? What do you want? " kaali asked angrily.',
								' After being blessed by kaali, raman asked her by holding his hands.',
								' oh mother !  am starving in hardship.',
								' I  am appealing to eradicate my hardship and to enhance my knowledge.',
								'  Kaali tremendously laughed',
								' you are too Greedy  ',
								' Do you need both  education and wealth ? "',
								'  Yes mother .. education is required to attain renown.',
								' wealth is needed to eradicate hardship.',
								' bless me with both , said raman.',
								' kaali has shown her both hands with smile.',
								' There were two bowls of milk .',
								'  Kaali gave the bowls to raman',
								' Rama, milk in these both bowls are very special',
								' Right side bowl represents Education',
								' Left side bowl indicates wealth',
								' You have to drink only one bowl of milk.',
								' What you actually need that much milk only you drink from the bowl ", She said with a smile.',
								' raman " what mother, I asked both only.',
								'  But she asked to drink only one bowl.',
								' "I dont know what to drink" as he stood like thinking for a while', 
								'which all of a sudden he poured milk from left hand bowl to right hand bowl and drank that bowls milk vigorously and smiled.',
								' kaali were stunned',
								'I told you to drink only one bowl of milk.',
								'  Yes mother , me also drank only one bowl of milk  said by him',
								'Why do you mixed together ? "',
								' You did not inform me wheather to mix or not"',
								' kaali smiled furiously.',
								' rama! you cheated me itself',
								' "you will not earn the name of great poet, rather you will be named as vigadakavi", she blessed and disappeared.', 
								' raman laughed himself after saying him as vigadakavi.',
								' he exclaimed as if vigadakavi remains same even it is reversly read.',
							];
					var WOA2 =[
									' king krishnadevarayar\'s birthday ', 
									'The entire city has been decorated with festoon, house has also been decorated.', 
									'people have celebrated kings birthday happily as same as their birthday',
									' On the first day night dance concerts and fireworks have been explored in streets.', 
									' people who came from foreign country to the palace  are treated indulgencely.',
									' Next day honouring ceremony for the king happened  in durbar.',
									' Initially chief of the state  who came from foreign, deliver their own kings gifts.',
									' Next chief  of the state, people gave their gifts  to the king and honoured him.',
									' Afterwards close friends of the king gave their respective gifts.',
									' At that time thenaliraman enters with big package at that time.',
									' Everyone including king  exclaimed with wonder. ',
									' King , who received the gifts to others is to be  kept closer.',
									' Thenaliraman brought a big package so people in durbar looked him surprisingly as what would be the gift and the king asked him to open the package.',
									' Thenaliraman  without any hesitation started opening the package continuously.',
									' After opening the package the gift appears as sarufine lobes rather the appropriate gift is not identified.',
									'Everyone noticed with wistful ',
									' Finally he opened the very small packet.',
									' Inside that well dried tamarind fruit is there.',
									' people in the durbur laughed ',
									' King signed his hand thereby the gift presented by thenaliraman may  be smaller',
									'The major reason for that can be larger?" pointed to people in durbar afterwards turning to thenaliraman " what is the reason to select this package? asked by king.', 
									'oh king how would be a king who rules a country is based upon a tamarind fruit only.',
									' king is like a fruit in the tamarind tree.',
									' He is sweet, as to be flavor of the fruit .',
									' At the same time, one should not stick to any personal wishes alike tamarind fruit shell. Inorder to explain this, I brought this tamarind to gift you.',
									'  he said you must be tamarind seed and its shell',
									' Peoples in durbar clapped their hands and cheered.',
									' King stood from  his throne , Embraced thenaliraman "rama you have thought me a good lesson".',
									' You do not need a birthday party so extravagant ',
									' Treasure"s money as well as peoples heart have been wasted.',
									' Suddenly stop the celebrations.',
									' hereafter on my birthday offering worship has to be done in temple only.', 
									' he ordered , without any need we donot waste money ',
									' Everyone praised the courage of thenaliraman\'s tact.',
									' king gifts the richest one from the received gifts to thenaliraman', 
								];
						var WOA3 =[
									' At one time there was a severe drought in the kingdom of Vijayanagar',
									' Due to failed monsoon,  pool, pond, lake are dried.',
									' The level of the water in the well goes to very deep in the house of thenaliraman',
									' For that thenaliraman  struggled to irrigate the backyard everyday ',
									' At this night  time ,  he found that four thieves sneaked into his backyard.',
									'  suddenly he come to his home and told to his wife that," By the failure of the monsoon in the country , has led to famine" .',
									' So a lot of theft has started . ',
									'We have to be very careful until the end of the famine .',
									' "Let us do this", he shouted so that theives who were hiding outside can hear this.',
									' For that what to do? asked his wife.',
									' Jewel and precious things in the home are to be locked in this box which is in home.',
									'  Let us drop this box into the well.',
									' Thenaliraman shouted as " after devasting famine and theft fear will get back again from well.',
									'The theives also heard this.',
									'At the same time thenaliraman secretly intimated his wife that the thiefs were hidden and he put stone, sand, old things are kept in an old box',
									' Thenaliraman lift that weighted box,dropped into the well and returned home.',
									' The thief said"Thenaliraman made our job easier by entering his house and robbing "',
									' "We can easily take the box from the well "the thieves  had talked to themselves.',
									'The thieves arrived near well to take the box.',
									'On seeing  the depth of the well theif feared and said Oh brother water level is low only.',
									'The thief said that" we four can drown the water using pulley,so that we  can take the box easily from well".',
									'By hearing this all agreed to this plan.',
									'So one after one started to drown the water using pulley.',
									'  After some time, Thenaliraman goes in to the backyard in different way and the  water drowned by the theives , can be changed into his plants, creepers and the crops .',
									' By doing this the day has been dawned.',
									'But the level of water has not been decreased.',
									'Hence,the thief had decided to return back tomorrow night again for taking the box.',
									'At that time,thenaliraman returned from backyard and said to them "Dont come tomorrow"',
									'Because,yours drowned water is still enough for three days.',
									'He said that"So it is enough to come after three days,',
									'thanks for your help".',
									'The thief also felt shame after hearing this.',
									'They have exclaimed about thenaliraman\'s intelligency by cheating them to drown the water.',
									'Also,the thieves feared that whether they will be caught by staying here and started running from there.'
								];
							var googleoutput1 = 
								[
									'About four hundred and eighty years ago in the state of Andhra Pradesh , a poor Brahmin family in a village tenaliraman .', 
									'He lost his father young .',
									'So he and his mother lived in the town of Denali father and his mother lived in support .',
									'Denali ramanukkup veppankayakak hated going to school to read .',
									'But , naturally, had a brilliant comedian cuvaiyakap speaking skill .',
									'Denali Raman household was forced to save because you have family there .',
									'What if I missed him so the worry ',
									'One day, a sage came to Denali .',
									'Rama\'s nilaiyaikkantu he taught him a mantra .',
									'The chant went on to tell us that with devotion japit maval Kali Prasanna .',
									'Rama thus outside the city to visit the Kali temple of the sage who taught him to pray nurriyettu mantra .',
									'Kali has piracannamak . Raman thought .',
									'He quickly came to mind. Ayirattuettu sage once said .',
									'Close your eyes and began to pray Khali once again .',
									'Night had arrived .',
									'But Rama was rarely out of the Kali temple .',
									'Kali suddenly appeared in front of him ',
									'" Why did you call me ? What do you want? " Kali said that angry', 
									'Raman arose , bowed her hands and asked tolutavare kuppit .',
									'" Mother, I am in abject poverty.',
									'On my way to get rid of poverty taraventukiren me sane .',
									'Kali larger smiled.',
									'" Greed is for you ',
									'Do you want to have an education, and wealth ? "',
									'" Yes , mother . Pukalataiyak be educated.',
									'Divested of poverty should be interpreted .',
									'Giving us the grace to do both . " Rama said .',
									'Khali with a smile, pointing to her two hands .',
									'There were two bowls of milk .',
									'Kali Raman gave the glasses .',
									'" Rama ! This is the most significant in two kinnankalilum .',
									'Right Education bowl .',
									'Wealth left to bowl ',
									'You only need to drink milk a kinnattil .',
									'What you really need only drink milk from the bowl , "she said with a smile .',
									'Raman, " Mother, what I have heard both by himself .',
									'We speak a cup and drink .',
									'I do not know what to drink , "he stood like a little bit of time to think .',
									'Then suddenly karattilirunta milk left in the bowl right karattilirunta kottivittu matamatavenak drinking the milk left kinnattup laughed .',
									'Kali were stunned ',
									'"I told you to drink a kinnattil palaittane IN ! "',
									'Yes , mother , I drank a kinnattup palaittane .  Said .',
									' Why do you mix the two together ? "',
									' Do not stir the mother did not tell me ! "',
									'Kali smile furious.',
									' Rama ! Deceived myself .',
									'Without the funny name is the name that you will get great pulavan . "He disappeared , leaving her with a gift .',
									'Saying that he had to smile looking at funny Raman .',
									'That is happy to be back and to be funny reading .'
								]
							var googleoutput2 = [
									'Kirusnatevarayarukkup King Birthday Festival.',
									'Nakaramellam wreathe , vitellam decorations !',
									'People like their birthday , the Kings birthday celebrated with joy .',
									'First dance song of the night , every street , vana fun.',
									'Ekatataputal happened to come from outside the palace .',
									'Respect for the king of the State Council held the next day .',
									'Chiefs who came from abroad in the first state , the nations rulers had sent gifts .',
									'Then the chiefs of state , public, and paid tribute to the king presented .',
									'Then presented their gifts to the kings closest friends .',
									'Then entered in tenaliraman with a large packet .',
									'Everyone , including the king watched with wonder .',
									'King , who received the gifts to others in its vicinity ,',
									'The prize package is too large to bring tenaliraman avaiyilullavarkal eagerly to what was seen as a gift to the king and told tenaliraman pottalattaip break .',
									'Pottalattaip tenaliraman detach freely . Split was over.',
									'Cerntanave talaimatalkal divide split apart at the feet do not know the meaning of gifts .',
									'Everyone noticed so eagerly .',
									'Was the last detach a small package .',
									'Well then dried paluttuk onriruntatu puliyampalam .',
									'Keliyakac audience laughing.',
									'King kaiyamarttic with laughter subsided , "" may tenaliraman small gift .',
									'He will give the larger stay ?  "He said , watching avaiyinaraip tenaliraman turn , Rama reason for picking this little mean what? He asked.',
									'"Oh , to be a theory that explains how the country s ruling monarch s one puliyampalam fruit .',
									'Who is the king of fruit like tamarind tree nut',
									'He is sweet, as to be flavor of the fruit .',
									' At the same time, wishes to be the puliyampala implanted ottamalum explain this puliyampalattaip brought presents .',
									'Be puliyampalamum otumpola ! He said.',
									'Members of the audience applause .',
									'King eyes up Pannikkar acanattaivittu tenaliramanait embrace , "" Rama teach me right senses .',
									'You do not need a birthday party so extravagant .',
									'" " Public money pokkisap \'ve vinakumpati smell .',
									'Special Stop immediately',
									'No longer offering the service must be performed only in temples on my birthday',
									'Do not spend money without atamparamakac ,  as ordered .',
									'Tenaliraman the courage , tact and appreciated by all .',
									'Prices in the gift shop to pick uyarntavarrait tenaliramanukkup king had given him as a gift .'
									];
							var googleoutput3 = [
									'At one time there was a severe drought in the kingdom of Vijayanagar .',
									'Having failed monsoon pool , pond , lake dried up everything .',
									'More alattirkup gone home tenaliraman kinarrilum low water .',
									'Struggled to irrigate the garden tenaliraman everyday .',
									'At this time, one night , and found that four thieves sneaked into his garden .',
									'Then came home and told his wife , " at the bottom , with the failure of the monsoon in the country , has led to famine .',
									'So a lot of this has started to happen theft . We have to be very careful until the end of the famine .',
									'So we do a thing , "he cried to hear thieves hiding out .',
									'" What can you do ? " Tenaliraman that the wife said.',
									' The jewel of the house , and all the precious things put in the lock box .',
									'Let us leave this hideously well .',
									'Famine exhausted stolen again from the well ceased to fear , "he said loudly tenaliraman before .',
									'So crooks .',
									'At the same time secretly tenaliraman olintiruppataik thieves claiming his wife in an old box of stone, sand , and covered at all of the old stuff .',
									'The box came up , unable to sleep the well \' belly \' penru put tenaliraman returned home .',
									'Crooks , " tenaliraman , broke into the house and stealing our work easier .',
									'We can easily take the box from the well as " talking to themselves .',
									'Thieves take the ark came to the well .',
									'As well, the depth of the thief in irankap timid man , " Brother! Is less than that of water .',
									'By changing the water giving rise to the quartet is not easy , but we can take the box , "he said',
									'Others opt for the hearing he admitted.',
									'Accordingly, one by one , began to rise through the water iraikkat .',
									'Tenaliraman went the other way at a later time to the garden , giving thieves poured water on the plants in her garden , vines and crops has returned payumaru canal .',
									'So when it has dawned .',
									'But there was no lack of water in the well .',
									'The crooks , " Come back tomorrow night, giving the water to leave the box ," he went on talking .',
									'Tenaliraman from the garden to them , " Do not tomorrow',
									'You can draw enough water for more than three days .',
									'So , if there is enough for three days later . Thanks guys for all your help ! "He said .',
									'Listening to this, it was too ashamed to thieves .',
									'Deceived themselves into thinking mind is the capacity of water were amazed tenaliraman iraikkac users .',
									'If there is also the fear of being trapped thieves look back and ran .'
									];

							var actualoutput1 = [
									'About four hundred and eighty years ago, a small village residing in andhra pradesh, thenaliraman was born in poor brahmin family.',
									'when he was young he lost his father.',
									'so,In the support of his maternal uncle thenaliram and his mother lived in thenali.',
									'For thenaliraman it was very hard to study in school.',
									'but he naturally acquired, intelligence and comedy sense of speech.',
									'Owing to his fatherís absence thenaliraman has been compelled to look after his family.',
									'so  he worried, what to do ?',
									'One day, a sage came to Thenali .',
									'looking at his state of rama he preached  a mantra.', 
									'He said that by depicting this manthra lord kali will appears.',
									'owing to this, raman also went to kaali temple that is residing outside of his place and depicts the mantra for 108 times which was preached by the sage.',
									'Raman thought  that kaali doesít appears', 
									'Suddenly he remembers that the sage had said 108 times',
									'Immediately he closed his eyes again and started praying for  kaali.',
									'Night has arrived .',
									'But also Rama  didnít left Kaali temple.',
									'suddenly kaali  appeared in front of him', 
									'Why did you called me ? What do you want? " kaali asked angrily.',
									'After being blessed by kaali, raman asked her by holding his hands.',
									'oh mother !  am starving in hardship.',
									'I  am appealing to eradicate my hardship and to enhance my knowledge.',
									'Kaali tremendously laughed',
									'you are too Greedy',
									 'Do you need both  education and wealth ? "',
									'Yes mother .. education is required to attain renown.',
									'wealth is needed to eradicate hardship.',
									'bless me with both , said raman.',
									'kaali has shown her both hands with smile.',
									'There were two bowls of milk .',
									'Kaali gave the bowls to raman',
									'Rama, milk in these both bowls are very special',
									'Right side bowl represents Education',
									'Left side bowl indicates wealth',
									 'You have to drink only one bowl of milk.',
									'What you actually need that much milk only you drink from the bowl ", She said with a smile.',
									'raman " what mother, I asked both only.',
									'But she asked to drink only one bowl.',
									'"I dont know what to drink" as he stood like thinking for a while',
									'which all of a sudden he poured milk from left hand bowl to right hand bowl and drank that bowls milk vigorously and smiled.',
									'kaali were stunned',
									'I told you to drink only one bowl of milk.',
									'Yes mother , me also drank only one bowl of milk  said by him',
									'Why do you mixed together ? "',
									'You did not inform me wheather to mix or not"',
									'kaali smiled furiously.',
									'rama! you cheated me itself',
									'"you will not earn the name of great poet, rather you will be named as vigadakavi", she blessed and disappeared.',
									'raman laughed himself after saying him as vigadakavi.',
									 'he exclaimed as if vigadakavi remains same even it is reversly read.'
								];
							var actualoutput2=[
									'king krishnadevarayar\'s birthday ',
									'The entire city has been decorated with festoon, house has also been decorated.', 
									'people have celebrated kings birthday happily as same as their birthday',
									'On the first day night dance concerts and fireworks have been explored in streets.',
									'People who came from foreign country to the palace  are treated indulgencely.',
									'Next day honouring ceremony for the king happened  in durbar.',
									'Initially chief of the state  who came from foreign, deliver their own kings gifts.',
									'Next chief  of the state, people gave their gifts  to the king and honoured him.',
									'Afterwards close friends of the king gave their respective gifts.',
									'At that time thenaliraman enters with big package at that time.',
									'Everyone including king  exclaimed with wonder. ',
									'King , who received the gifts to others is to be  kept closer.',
									'Thenaliraman brought a big package so people in durbar looked him surprisingly as what would be the gift and the king asked him to open the package.',
									'Thenaliraman  without any hesitation started opening the package continuously.',
									'After opening the package the gift appears as sarufine lobes rather the appropriate gift is not identified.',
									'Everyone noticed with wistful',
									'Finally he opened the very small packet.',
									'Inside that well dried tamarind fruit is there',
									'People in the durbur laughed ',
									'King signed his hand thereby the gift presented by thenaliraman may  be smaller',
									'The major reason for that can be larger?" pointed to people in durbar afterwards turning to thenaliraman " what is the reason to select this package? asked by king.', 
									'Oh king how would be a king who rules a country is based upon a tamarind fruit only.',
									'King is like a fruit in the tamarind tree.',
									'He is sweet, as to be flavor of the fruit .',
									'At the same time, one should not stick to any personal wishes alike tamarind fruit shell. Inorder to explain this, I brought this tamarind to gift you.',
									'He said you must be tamarind seed and its shell',
									'Peoples in durbar clapped their hands and cheered.',
									'King stood from  his throne , Embraced thenaliraman "rama you have thought me a good lesson".',
									'You do not need a birthday party so extravagant ',
									'Treasure\'s money as well as peoples heart have been wasted.',
									'Suddenly stop the celebrations.',
									'Hereafter on my birthday offering worship has to be done in temple only.', 
									'He ordered , without any need we donot waste money .',
									'Everyone praised the courage of thenaliraman\'s tact.',
									'King gifts the richest one from the received gifts to thenaliraman.' 
									];
								var actualoutput3=[
								'At one time there was a severe drought in the kingdom of Vijayanagar',
								'Due to failed monsoon,  pool, pond, lake are dried.',
								'The level of the water in the well goes to very deep in the house of thenaliraman',
								'For that thenaliraman  struggled to irrigate the backyard everyday ',
								'At this night  time ,  he found that four thieves sneaked into his backyard.',
								'suddenly he come to his home and told to his wife that," By the failure of the monsoon in the country , has led to famine"',
								'So a lot of theft has started . We have to be very careful until the end of the famine .',
								'"Let us do this", he shouted so that theives who were hiding outside can hear this.',
								'For that what to do? asked his wife.',
								'Jewel and precious things in the home are to be locked in this box which is in home.',
								'Let us drop this box into the well.',
								'Thenaliraman shouted as " after devasting famine and theft fear will get back again from well.',
								'The theives also heard this.',
								'At the same time thenaliraman secretly intimated his wife that the thiefs were hidden and he put stone, sand, old things are kept in an old box',
								'Thenaliraman lift that weighted box,dropped into the well and returned home.',
								'The thief said"Thenaliraman made our job easier by entering his house and robbing "',
								'"We can easily take the box from the well "the thieves  had talked to themselves.',
								'The thieves arrived near well to take the box.',
								'On seeing  the depth of the well theif feared and said Oh brother water level is low only.',
								'The thief said that" we four can drown the water using pulley,so that we  can take the box easily from well".',
								'By hearing this all agreed to this plan.',
								'So one after one started to drown the water using pulley.',
								'After some time, Thenaliraman goes in to the backyard in different way and the  water drowned by the theives , can be changed into his plants, creepers and the crops .',
								'By doing this the day has been dawned.',
								'But the level of water has not been decreased.',
								'Hence,the thief had decided to return back tomorrow night again for taking the box.',
								'At that time,thenaliraman returned from backyard and said to them "Dont come tomorrow"',
								'Because,yours drowned water is still enough for three days.',
								'He said that"So it is enough to come after three days,thanks for your help".',
								'The thief also felt shame after hearing this.',
								'They have exclaimed about thenaliraman\'s intelligency by cheating them to drown the water.',
								'Also,the thieves feared that whether they will be caught by staying here and started running from there.',
								];

								var morpho3  = 
								[
										'ராஜ்யத்தில்',
										'விட்டதால்',
										'கிணற்றிலும்', 
										'குறைந்து',
										'இதனால்',
										'தினமும்',
										'தோட்டத்திற்கு', 
										'சமயத்தில்', 
										'தோட்டத்தில்',
										'பதுங்கி',
										'இருப்பதை',
										'மனைவியிடம்',
										'நாட்டில்',
										'நடக்க',
										'முடியும்',
										'ஜாக்கிரதையாக',
										'செய்வோம்',
										'பதுங்கியிருந்த',
										'திருடர்களுக்கு', 
										'குரலில்',
										'பேசினான்',
										'தெனாலிராமனின்',
										'கேட்டாள்',
										 'விலையுயர்ந்த',
										'பொருட்களை',
										'பெட்டியில்',
										'பெட்டியை',
										'யாருக்கும்',
										'கிணற்றில்',
										'ஒழிந்ததும்',
										'எடுத்துக்',
										'கூறினான்',
										'திருடர்களும் ',
										'கேட்டனர்',
										'ரகசியமாக',
										'மனைவியிடம்',
										'பெட்டியில்',
										'பொருட்களை',
										'மூடினான்',
										'பெட்டியை', 
										'கிணற்றுக்குள்',
										'வீட்டுக்கு',
										'திருடர்களும்',
										'வீட்டிற்குள்',
										'புகுந்து',
										'திருடும்',
										'வேலையை',
										'எளிதாக',
										'கிணற்றிலிருந்து',
										'பெட்டியை',
										'எடுத்து',
										'கொண்ட்னர்',
										'கிணற்றுக்கு',
										'வந்தனர்',
										'ஆழமாக',
										'இருந்ததால்',
										'இறங்க',
										'இறைத்து', 
										'சுலபமாக', 
										'மற்றவர்களும்', 
										'திட்டத்துக்கு', 
										'இறைக்க',
										'தொடங்கினர்',
										'கழித்து', 
										'வழியாக',
										'இறைத்து',
										'தோட்டத்தில்',
										'செடிகளுக்கும்',
										'கொடிகளுக்கும்',
										'பயிர்களுக்கும்',
										'கால்வாயை',
										'திருப்பி',
										'இப்படியே',
										'விடிந்தது',
										'கிணற்றில்',
										'இதனால்',
										'இறைத்து',
										'பெட்டியை',
										'எடுத்து',
										'சென்றனர்',
										'தோட்டத்திலிருந்து',
										'அவர்களை',
										'பார்த்து',
										'நாளைக்கு',
										'இறைத்த',
										'தினங்களுக்கு',
										'கழித்து',
										'உதவிக்கு',
										'கூறினான்',
										'திருடர்களுக்கு', 
										'கேட்டதும்',
										'தங்களை',
										'இறைக்கச', 
										'தெனாலிராமனின்', 
										'அறிவை',
										'மனத்திற்குள்',
										'வியந்தனர்',
										'இருந்தால்',
										'அச்சத்தில்',
										'திரும்பி',
										'பார்க்காமல்',
										'பிடித்தனர்'
								];

								var morpho2  = [
								                
										'பிறந்த',
										'நகரமெல்லாம்',
										'வீடெல்லாம்',
										'மகிழ்ச்சியோடு',
										'கொண்டாடினர்',
										'அரண்மனையில்,',
										'வெளிநாடுகளிலிருந்து',
										'நடந்தது',
										'சபையில்',
										'அரசருக்கு',
										'செலுத்துதல்',
										'நடந்தது',
										'முதலில்',
										'பரிசுகளைத்',
										'தந்தனர',
										'பரிசளித்து',
										'செலுத்தினார்கள்',
										'அரசரின்',
										'நெருங்கிய',
										'அளித்தனர்',
										'பெரியதொரு',
										'பொட்டலத்துடன்',
										'நுழைந்தான்', 
										'வியப்போடு',
										'பார்த்தனர்',
										'மற்றவர்களிடம்',
										'பெரிதாக',
										'இருந்ததால்',
										'அவையிலுள்ளவர்கள்',
										'ஆவலோடு',
										'பார்த்ததால்', 
										'பொட்டலத்தை',
										'தெனாலிராமனிடம்',
										'பிரித்தான்', 
										'இருந்தான', 
										'காலடியில்', 
										'சேர்ந்தனவே', 
										'அதனால்', 
										'ஆவலுடன்', 
										'கவனித்தனர்',
										'கடைசியில்',
										'பொட்டலமாக',
										'இருந்ததை',
										'அதற்குள்',
										'நன்றாக',
										'பழுத்து', 
										'காய்ந்த', 
										'ஒன்றிருந்தது',
										'அவையினர்',
										'கேலியாக',
										'சிரித்தனர்', 
										'அடங்கியவுடன்',
										'கொடுத்த', 
										'சிறிதாக', 
										'கொடுக்க', 
										'பெரிதாக', 
										'அவையினரை',
										'பார்த்து', 
										'திரும்பி',
										'கேட்டார்',
										'தத்துவத்தை', 
										'மன்னராக', 
										'மரத்தில்',
										'காய்க்கும்',
										'பழத்தைப்',
										'பழத்தின்', 
										'சுவையை', 
										'இனிமையானவராக', 
										'நேரத்தில',
										'ஓட்டில்',
										'ஒட்டாமலும்',
										'என்பதை',
										'விளக்கவே', 
										'பரிசாக', 
										'வந்தேன்',
										'புளியம்பழமும்',
										'அவையினர்', 
										'செய்தனர்', 
										'பனிக்க', 
										'பணமும்', 
										'விட்டேன்',  
										'விசேடங்களை',
										'கோயில்களில்', 
										'மட்டுமே',
										'தெனாலிராமனின்',
										'துணிச்சலையும்', 
										'சாதுரியத்தையும்', 
										'பாராட்டினர்',
										'பொருள்களில்',
										'தெனாலிராமனுக்கு',
										'பரிசாக',
										'தந்தார்',
								];
								var morpho    =  [
								                  'காளியிடம்',
								                  'நானூற்று',
								                  'வருடங்களுக்கு',
								                  'மாநிலத்தில்',
								                  'சிற்றூரில்',
								                  'குடும்பத்தில்',
								                  'பிறந்தான்',
								                  'இளமையிலேயே',
								                  'தந்தையை',
								                  'இழந்தான்',
								                  'அதனால்',
								                  'அவனும்',
								                  'அவனுடைய',
								                  'தாயாரும்',
								                  'ஊரில்',
								                  'வசித்து',
								                  'ஆதரவில்',
								                  'வாழ்ந்து',
								                  'வந்தனர்',
								                  'ராமனுக்கு',
								                  'சென்று',
								                  'படிப்பது',
								                  'வேப்பங்காயாக',
								                  'கசந்தது',
								                  'நகைச்சுவையாகப்',
								                  'திறனும்',
								                  'இயற்கையாகவே',
								                  'பெற்றிருந்தான்',
								                  'காரணத்தால்',
								                  'குடும்பத்தை',
								                  'காப்பாற்ற',
								                  'வேண்டிய',
								                  'ஏற்பட்டது',
								                  'அதனால்',
								                  'செய்வது',
								                  'வாட்டியது',
								                  'தெனாலிக்கு',
								                  'வந்தார்',
								                  'இராமனின்',
								                  'அவனுக்கு',
								                  'மந்திரத்தைக்',
								                  'கொடுத்தார்',
								                  'பக்தியுடன்',
								                  'ஜபித்தால்',
								                  'சென்றார்',
								                  'இராமனும்',
								                  'ஊருக்கு',
								                  'கோயிலுக்குச்',
								                  'கொடுத்த',
								                  'ஜெபித்தான்',
								                  'யோசித்தான்',
								                  'நினைவுக்கு',
								                  'வந்தது',
								                  'கண்களை',
								                  'தொடங்கினான்',
								                  'இரவும்',
								                  'ஆனாலும்',
								                  'கோயிலை',
								                  'திடீரென்று',
								                  'தோன்றினாள்',
								                  'அழைத்தாய்',
								                  'கோபமாகக்',
								                  'கேட்டாள்',
								                  'வணங்கி',
								                  'எழுந்த',
								                  'கைகளை',
								                  'வறுமையில்',
								                  'வாடுகிறேன்',
								                  'வழியும்',
								                  'நல்லறிவும்',
								                  'பெரிதாகச்',
								                  'சிரித்தாள்',
								                  'கல்வியும்',
								                  'வேண்டும்',
								                  'வேண்டுமா',
								                  'புகழடையக்',
								                  'இரண்டையும்',
								                  'தந்து',
								                  'என்றான்',
								                  'புன்னகையுடன்',
								                  'கரங்களை',
								                  'நீட்டினாள்',
								                  'பாலுடன்',
								                  'வந்தன',
								                  'கிண்ணங்களை',
								                  'இராமனிடம்',
								                  'தந்தாள்',
								                  'கிண்ணத்திலுள்ள',
								                  'கிண்ணங்களிலும்',
								                  'குடிக்க',
								                  'கிண்ணத்தின்',
								                  'என்றாள்',
								                  'கேட்டேன்',
								                  'அருந்த',
								                  'சொல்கிறாயே',
								                  'அருந்துவது',
								                  'நின்றான்',
								                  'கரத்திலிருந்த',
								                  'குடித்து',
								                  'சிரித்தான்',
								                  'திகைத்து',
								                  'நின்றாள்',
								                  'குடித்தேன்',
								                  'என்றான்',
								                  'கலந்தாய்',
								                  'புரிந்தாள்',
								                  'ஏமாற்றி',
								                  'மறைந்தாள்',
								                  'பார்த்துச்',
								                  'சிரித்து',
								                  'கொண்டான்',
								                  'படித்தாலும்',
								                  'வருகிறதே',
								                  ]
								
								var spiltfilter3 = [
													'ராஜ்யம்+த்+இல்',
													'விட்டது+த்+ஆல்', 
													'கிணறு+ற்+உம்',
													'குறைத்த+த்+அ', 
													'இதன்+ஆல்', 
													'தினம்+உம்',
													'தோட்டம்+ல்+உம்', 
													'சமயம்+த்+இல்', 
													'தோட்டம்+த்+இல்', 
													'பதுங்கு+க்+இ',
													'இருப்பது+ஐ',
													'மனைவி+இடம் ',
													'நாடு+ட்+இல்', 
													'நட+க்+அ', 
													'முடி+ய்+உம்', 
													'ஜாக்கிரதை+ஆக',
													'செய்+வ்+ஓம்', 
													'பதுங்கி+இருந்த ',
													'திருடர்கள்+க்+உ', 
													'குரல்+இல்', 
													'பேசி+ன்+ஆன்',
													'தெனாலிராமன்+இன்', 
													'கேட்டு+ட்+ஆல்',
													'விலை+உயர்ந்த', 
													'பொருட்கள்+ஐ',
													'பெட்டி+இல்', 
													'பெட்டி+ஐ', 
													'யாரு+க்+உம் ',
													'கிணறு+இல்',  
													'ஒழிந்து+த்+உம்',
													'எடு+த்(ந்)+த்+உ', 
													'கூறி+ன்+ஆன்', 
													'திருடர்கள்+உம்', 
													'கேட்டு+ட்+அர்',
													'ரகசியம்+ஆக', 
													'மனைவி+இடம்', 
													'பெட்டி+இல்', 
													'பொருட்கள்+ஐ ',
													'மூடி+ன்+ஆன்', 
													'பெட்டி+ஐ ',
													'கிணறு+க்+உல்',
													'வீடு+க்+உ', 
													'திருடர்கள்+உம் ',
													'வீடு+ற்+உல்', 
													'புகு+த்(ந்)+த்+உ', 
													'திருடு+உம்', 
													'வேலை+ஐ',
													'எளிது+ஆக', 
													'கிணற்றில்+இருந்து', 
													'பெட்டி+ஐ',
													'எடு+த்(ந்)+த்+உ',
													'கொண்டு+ட்+அர்',
													'கிணறு+க்+உ',
													'வந்து+அன்+அர்',
													'ஆழம்+ஆக', 
													'இருந்து+அது+ஆல்', 
													'இறங்கு+க்+அ', 
													'இறை+த்(ந்)+த்+உ', 
													'சுலபம்+ஆக', 
													'மற்றவர்கள்+உம்', 
													'திட்டம்+க்+உ', 
													'இறை+க்+அ', 
													'தொடங்கு+இன்+அர்',
													'கழி+த்+உ', 
													'வழி+ஆக', 
													'இறை+த்+உ ',
													'தோட்டம்+த்+இல்', 
													'செடிகள்+க்+உம்', 
													'கொடிகள்+க்+உம்',
													'பயிர்கள்+க்+உம்', 
													'கல்வி+ஐ',
													'திருப்பி+இ', 
													'இப்படி+ஏ', 
													'விடிந்து+த்+அது', 
													'கிணறு+இல்', 
													'இதன்+ஆல்', 
													'இறை+த்+உ', 
													'பெட்டி+ஐ', 
													'எடு+த்+த்+உ',
													'சென்று+ற்+அன்+அர்',
													'தோட்டம்+த்+இல்', 
													'அவர்கள்+ஐ', 
													'பார்+த்+உ',
													'நாழி+க்+உ', 
													'இறை+த்+அ', 
													'தினங்கள்+க்+உ',
													'கழி+த்+உ',
													'உதவி+க்+உ',
													'கூறி+ன்+ஆன்',
													'திருடர்கள்+க்+உ',
													'கேட்டு+உம்', 
													'தங்கள்+ஐ', 
													'இறை+க்+அ',
													'தெனாலிராமன்+இன்', 
													'அறிவு+வ்+ஐ',
													'மனம்+ற்+இல்', 
													'வியந்து+அன்+அர்', 
													'இருந்து+அது+ஆல்', 
													'அச்சம்+த்+இல்', 
													'திரும்பு+ப+ஏ',
													'பார்+ப்+ஆல்',
													'பிடி+த்+அன்+அர்' 
								     ];
								
								var spiltfilter2 = [
														'பிறந்து+த்+அ',
														'நகரம்+எல்லாம்', 
														'வீடு+எல்லாம்',
														'மகிழ்ச்சி+ஓடு',
														'கொண்டு+ஆடு+அர்',
														'அரண்மனை+இல்',
														'வெளிநாடு+இல்+இருந்து',
														'நடந்து+ந்+அது',
														'சபை+இல்',
														'அரசர்+க்+உ',
														'செலுத்து +த்+அல்',
														'நடந்து+த்+உ',
														'முதல்+இல்',
														'பரிசுகள்+ஐ',
														'தந்து+அன்+அர்',
														'பரிசு+அளித்து',
														'செலுத்தி+த்+ஆர்+அள்',
														'அரசர்+இன்',
														'நெருங்கி+இய',
														'அளித்து+அன்+அர்', 
														'பெரியது+ஒரு',
														'பொட்டலம்+த்+உடன்', 
														'நுழை+த்(ந்)+ஆன்',
														'வியப்பு+ஓடு',
														'பார்த்து+அன்+அர்',
														'மற்றவர்கள்+இடம்',
														'பெரிது +ஆக',
														'இருந்தது+ அது+ஆல்',
														'அவையில்+உள்ள+அர்கள்',
														'ஆவல்+ஓடு',
														'பார்த்தது+ஆல்',
														'பொட்டலம்+ஐ',
														'தெனாலிராமன்+இடம்',
														'பிரி+த்(ந்)+ஆன்',
														'இரு+த்(ந்)+ஆன்',
														'காலடி+இல்',
														'சேர்த்தன+வ்+ஏ', 
														'அதன்+ஆல்',
														'ஆவல்+உடன்', 
														'கவனித்து+அன்+அர்',
														'கடைசி+இல்',
														'பொட்டலம்+ஆக',
														'இருந்து+அது+ஐ',
														'அதன்+ற்+உல்',
														'நன்று+ஆக',
														'பழு+த்+உ',
														'காய்ந்து+த்+அ', 
														'ஒன்று+இருந்தது',
														'அவை+இன்+அர்',
														'கேலி+ஆக',
														'சிரி+த்(ந்)+அன்+அர்', 
														'அடங்கு+இய+உடன்',
														'கொடு+த்+அ',
														'சிறிது+ஆக', 
														'கொடு+க்+அ', 
														'பெரிது+அக',
														'அவையினர்+ஐ',
														'பார்+த்+உ',
														'திரும்பு+இ',
														'கேட்டு+ட்+ஆர்',
														'தத்துவம்+த்+ஐ',
														'மன்னர்+ஆக',
														'மரம்+த்+இல்',
														'காய்+க்+உம்',
														'பழம்+ த்+ஐ',
														'பழம்+த்+இன்',
														'சுவை+ஐ',
														'இனியவர்+ஆக', 
														'நேரம்+த்+இல்',
														'ஓடு+ட்+இல்',
														'ஒட்டாமல்+உம்',
														'என்பது+ஐ',
														'விளக்கம்+வ்+ஏ', 
														'பரிசு+ஆக',
														'வந்து+ஏன்',
														'புளியம்பழம்+உம்',
														'அவை+இன்+அர்',
														'செய்து+அன்+அர்',
														'பனி+க்+அ',
														'பணம்+உம்', 
														'விட்டு+ஏன்',
														'விசேடங்கள்+ஐ', 
														'கோயில்கள்+இல்',
														'மட்டும்+ஏ',
														'தெனாலிராமன்+இன்', 
														'துணிச்சல்+ஐ+உம்',
														'சாதுர்யம்+ஐ+உம்',
														'பாராட்டு+இன்+அர்',
														'பொருள்கள்+இல்',
														'தெனாலிராமன்+உ+க்+அ', 
														'பரிசு+ஆக',
														'தா+த்(ந்)+த்+அர்+ஆர்'                  
								 ];
								var spiltfilter = [
														'காளி + இடம்',
														'நான்கு + நூறு',
														'வருடங்கள் + க் + உ',
														'மாநிலம் + த் +இல்',
														'சிறுமை + ஊர் + இல்',
														'குடும்பம் + இல்',
														'பிறந்து + ந் + ஆன்',
														'இளமை + இல் + ஏ',
														'தந்தை +ய்+ ஐ',
														'இழந்து + ந் + ஆன்',
														'அதன் + ஆல்',
														'அவன் + உம்',
														'அவன் + உடை+ அ',
														'தாயார் + உம்',
														'ஊர் + இல்',
														'வசி + த் + உ',
														'ஆதரவு + இல்',
														'வாழ் + ந் + உ',
														'வந்து + இன் + அர்',
														'ராமன் + க்+உ',
														'செல் + ற்+ உ',
														'படி + ப் + அது',
														'வேப்பங்காய் +  ஆக',
														'கசந்து + த் + உ',
														'நகைசுவை + ஆக',
														'திறன் + உம்',
														'இயற்கை + ஆக + ஏ',
														'பெற்று + இரு + ந் + ஆன்',
														'காரணம் + த் + ஆல்',
														'குடும்பம் + ஐ',
														'காப்பாற்று + அ',
														'வேண்டு + இய',
														'ஏற்பட்டு + ட் + அது',
														'அதன் + ஆல்',
														'செய் + வ் + அது',
														'வட்டி + ட் + அது',
														'தெனாலி + க் + உ',
														'வந்து + த் + ஆர்',
														'இராமன் + இன்',
														'அவன் + க் + உ',
														'மந்திரம் + த் + ஐ',
														'கொடு + த் + ஆர்',
														'பக்தி + உடன்',
														'ஜபித்து + ஆல்',
														'செல்+ற் + ஆர்',
														'இராமன் + உம்',
														'ஊர் + க் + உ',
														'கோயில் + க் + உ',
														'கொடுத்து + அ',
														'ஜபித்து + ஆன்',
														'யோசி + த் + ஆன்',
														'நினைவு + க் + உ',
														'வா + த் + ந் + அது',
														'கண்கள் + ஐ',
														'தொடங்கு + இன் + ஆல்',
														'இரவு + உம்',
														'ஆனால் + உம்',
														'கோயில் + ஐ',
														'திடீர் + என்று',
														'தோன்று + இன் + ஆல்',
														'அழை + த் + ஆய்',
														'கோபம் + ஆக',
														'கேட்டு+ட் + ஆள்',
														'வணங்கு + இ',
														'எழுந்து + அ',
														'கைகள் + ஐ',
														'வறுமை + இல்',
														 'வாடு + கிறு + ஏன்',
														'வழி + உம்',
														'நல்லறிவு + உம்',
														 'பெரிது + ஆக',
														'சிரி + த் + ஆள்',
														 'கல்வி + உம்',
														 'வேண்டு + உம்',
														'வேண்டும் + ஆ',
														'புகழ் + அடைய',
														'இரண்டு + ஐ + உம்',
														'தா + ந் + உ',
														'என்று + ஆன்',
														'புன்னகை + உடன்',
														'கரங்கள் + ஐ',
														'நீட்டி + ஆள்',
														 'பால் + உடன்',
														'வா + த்(ந்) + த் + அன் + அ',
														 'கிண்ணங்கள் + ஐ',
														'இராமன் + இடம்',
														 'தா + த்(ந்) + ஆள்',
														'கிண்ணங்கள் + இல் + உம்',
														'கிண்ணம் + இல் + உள்ள',
														'குடி + க் + அ',
														'கிண்ணம் + இன்',
														 'என்று + ஆள்',
														' கேட்டு + ஏன்',
														 'அருந்து + அ',
														 'சொல்கிறாய் + ஏ',
														'அருந்து + வ் + அது',
														'நின்று + ஆன்',
														'கரத்தில் + இருந்த',
														'குடி + த் + உ',
														'சிரி + த் + ஆன்',
														 'திகை + த் + த் + உ',
														'நின்று + ஆள்',
														 'குடி + த் + ஏன்',
														 'என்று + ஆன்',
														'கலந்து + ஆய்',
														 'புரி + த்(ந்) + ஆள்',
														 'ஏமாற்று + அ',
														'மறை + த்(ந்) + த் + ஆள்',
														'பார் + த் + த் + உ',
														 'சிரி + த் + த் + உ',
														 'கொண்டு + ஆன்',
														'படி + த் + ஆ + உம்',
														'வருகிறது + ஏ'
													]
								var rootwordcollection = [
									                          'காளி',
									                          'நான்கு',
									                          'வருடங்கள்',
									                          'மாநிலம்',
									                          'சிறுமை',
									                          'குடும்பம்',
									                          'பிறந்து',
									                          'இளமை',
									                          'தந்தை',
									                          'இழந்து',
									                          'அதன்',
									                          'அவன்',
									                          'தாயார்',
									                          'ஊர்',
									                          'வசி',
									                          'ஆதரவு',
									                          'வாழ்',
									                          'வந்து',
									                          'ராமன்',
									                          'செல்',
									                          'படி',
									                          'வேப்பங்காய்',
									                          'கசந்து',
									                          'நகைசுவை',
									                          'திறன்',
									                          'இயற்கை',
									                          'பெற்று',
									                          'காரணம்',
									                          'குடும்பம்',
									                          'காப்பாற்று',
									                          'வேண்டு',
									                          'ஏற்பட்டு',
									                          'அதன்',
									                          'செய்',
									                          'வட்டி',
									                          'தெனாலி',
									                          'வந்து',
									                          'இராமன்',
									                          'அவன்',
									                          'மந்திரம்',
									                          'கொடு',
									                          'பக்தி',
									                          'ஜபித்து',
									                          'செல்',
									                          'இராமன்',
									                          'ஊர்',
									                          'கோயில்',
									                          'கல்'
									                      ]
									var rootwordcollection2 = [
																	'பிறந்து',
																	'நகரம்',
																	'வீடு',
																	'மகிழ்ச்சி',
																	'கொண்டு',
																	'அரண்மனை',
																	'வெளிநாடு',
																	'நடந்து',
																	'சபை',
																	'அரசர்',
																	'செலுத்து',
																	'நடந்து',
																	'முதல்',
																	'பரிசுகள்',
																	'தந்து',
																	'பரிசு',
																	'செலுத்தி',
																	'அரசர்',
																	'நெருங்கி',
																	'அளித்து',
																	'பெரியது',
																	'பொட்டலம்',
																	'நுழை',
																	'வியப்பு',
																	'பார்த்து',
																	'மற்றவர்கள்',
																	'பெரிது',
																	'இருந்தது',
																	'அவையில்',
																	'ஆவல்',
																	'பார்த்தது',
																	'பொட்டலம்',
																	'தெனாலிராமன்',
																	'பிரி',
																	'இரு',
																	'காலடி',
																	'சேர்த்தன',
																	'அதன்',
																	'ஆவல்',
																	'கவனித்து',
																	'கடைசி',
																	'பொட்டலம்',
																	'இருந்து',
																	'அதன்',
																	'நன்று',
																	'பழு',
																	'காய்ந்து',
																	'ஒன்று',
																	'அவை',
																	'கேலி',
																	'சிரி',
																	'அடங்கு',
																	'கொடு',
																	'சிறிது',
																	'கொடு',
																	'பெரிது',
																	'அவையினர்',
																	'பார்',
																	'திரும்பு',
																	'கேட்டு',
																	'தத்துவம்',
																	'தத்துவம்',
																	'மன்னர்',
																	'மரம்',
																	'காய்',
																	'பழம்',
																	'சுவை',
																	'இனியவர்',
																	'நேரம்',
																	'ஓடு',
																	'ஒட்டாமல்',
																	'என்பது',
																	'விளக்கம்',
																	'பரிசு',
																	'வந்து',
																	'புளியம்பழம்',
																	'அவை',
																	'செய்து',
																	'பனி',
																	'பணம்',
																	'விட்டு',
																	'விசேடங்கள்',
																	'கோயில்கள்',
																	'மட்டும்',
																	'தெனாலிராமன்',
																	'துணிச்சல்',
																	'சாதுர்யம்',
																	'பாராட்டு',
																	'பொருள்கள்',
																	'தெனாலிராமன்',
																	'பரிசு',
																	'தா'
									                           ]
									var rootwordcollection3 = [
																	'ராஜ்யம்',
																	'விட்டது',
																	'கிணறு',
																	'குறைத்த',
																	'இதன்',
																	'தினம்',
																	'தோட்டம்',
																	'சமயம்',
																	'பதுங்கு',
																	'இருப்பது',
																	'மனைவி',
																	'நாடு',
																	'நட',
																	'முடி',
																	'ஜாக்கிரதை',
																	'செய்',
																	'பதுங்கி',
																	'திருடர்கள்',
																	'குரல்',
																	'பேசி',
																	'தெனாலிராமன்',
																	'கேட்டு',
																	'விலை',
																	'பொருட்கள்',
																	'பெட்டி',
																	'கிணறு',
																	'ஒழிந்து',
																	'எடு',
																	'கூறி',
																	'திருடர்கள்',
																	'கேட்டு',
																	'ரகசியம்',
																	'பெட்டி',
																	'பொருட்கள்',
																	'மூடி',
																	'வீடு',
																	'புகு',
																	'திருடு',
																	'வேலை',
																	'எளிது',
																	'கிணற்றில்',
																	'கொண்டு',
																	'வந்து',
																	'ஆழம்',
																	'இருந்து',
																	'இறங்கு',
																	'இறை',
																	'சுலபம்',
																	'மற்றவர்கள்',
																	'திட்டம்',
																	'இறை',
																	'தொடங்கு',
																	'கழி',
																	'வழி',
																	'இறை',
																	'தோட்டம்',
																	'செடிகள்',
																	'கொடிகள்',
																	'பயிர்கள்',
																	'கல்வி',
																	'திருப்பி',
																	'இப்படி',
																	'விடிந்து',
																	'கிணறு',
																	'இதன்',
																	'இறை',
																	'பெட்டி',
																	'எடு',
																	'சென்று',
																	'தோட்டம்',
																	'அவர்கள்',
																	'பார்',
																	'நாழி',
																	'இறை',
																	'தினங்கள்',
																	'உதவி',
																	'கூறி',
																	'திருடர்கள்',
																	'கேட்டு',
																	'தங்கள்',
																	'தெனாலிராமன்',
																	'அறிவு',
																	'மனம்',
																	'வியந்து',
																	'இருந்து',
																	'அச்சம்',
																	'திரும்பு',
																	'பார்',
																	'பிடி'
								                           ]
									var suffixlist3 = [
																		'இல்',
																		'அர்',
																		'ஆல்',
																		'இல்', 
																		'உம்',
																		'இடம்',
																		'ஆக', 
																		'இருந்த ',
																		'ஓம்',
																		'இன்',
																		'ஆன்',
																		'உயர்ந்த',
																		'உல்',
																		'இருந்து',
																		'அர்',
																		'அது',
																		'இல்'
									                   ] 
									var suffixlist2 = [
																		'எல்லாம்',
																		'ஓடு',
																		'அர்',
																		'இல்',
																		'இருந்து',
																		'அது',
																		'இல்',
																		'அல்',
																		'அள்',
																		'இன்',
																		'இய',
																		'ஒரு',
																		'உடன்',
																		'ஆன்',
																		'அர்',
																		'இடம்',
																		'ஆக',
																		'ஆல்',
																		'அர்கள்',
																		'ஓடு',
																		'ஆன்',
																		'உடன்', 
																		'உல்',
																		'ஆக',
																		'இருந்தது',
																		'ஆர்',
																		'ஆக',
																		'உம்',
																		'இன்',
																		'ஏன்',
																		'உம்',
																		'ஆர்',
																		'ஆடு',
																		'இல்'
									                   ]
									var suffixlist = [
															'இடம்',
															'நூறு',
															'இல்',
															'ஆன்',
															'ஆல்',
															'உம்',
															'அர்',
															'அது',
															'ஆக',
															'இன்',
															'ஆர்',
															'உடன்',
															'ஆய்',
															'ஆள்',
															'ஏன்',
															'அடைய',
															'இடம்',
															'உள்ள',
															'இருந்த'
														]

									var sandhilist = [
																'க்',
																'த்',
																'ந்',
																'ய்',
																'ற்',
																'ப்',
																'ட்',
																'வ்',
																'த்',
																'ந்',
																'க்',
																'ற்',
																'ட்',
																'வ்',
																'ஐ'
													]
									var tenses = [
																'வாழ்ந்து',
																'பிறந்தான்',
																'இழந்தான்',
																'வசித்து',
																'வந்தனர்',
																'கசந்தது',
																 'பெற்றிருந்தான்',
																'ஏற்பட்டது',
																'வாட்டியது',
																'வந்தார்',
																 'கொடுத்தார்',
																 'சென்றார்',
																'ஜெபித்தான்',
																'யோசித்தான்',
																'வந்தது',
																'தொடங்கினான்',
																'தோன்றினாள்',
																'அழைத்தாய்',
																'கேட்டாள்',
																'எழுந்த ',
																'சிரித்தாள்',
																'என்றான்',
																'சிரித்தாள்',
																 'தந்தாள்',
																'கேட்டேன்',
																'என்றாள்',
																'நின்றான்',
																'சிரித்தான்',
																'நின்றாள்',
																' குடித்தேன்',
																 'என்றான்',
																'கலந்தாய்',
																 'புரிந்தாள்',
																'மறைந்தாள்',
																 'கொண்டான்',
																'படிப்பது',
																'ஜபித்தால்'
														]

										var predicate  =  [
										                   
																		'உ',
																		'ஏ',
																		'அ',
																		'ஐ',
																		'அ',
																		'உ',
																		'ஐ',
																		'ஏ',
																		'உ',
																		'இ'
														  ]

										var conjunction = [
																		'ஊர்',
																		'உடை',
																		'இன்',
																		'ஆக',
																		'கிறு',
																		'இல்',
																		'அன்',
																		'அது',
										                   ]
										var genderss = [
																		'பெற்றிருந்தான்',
																		'பிறந்தான்',
																		'இழந்தான்',
																		'ஜெபித்தான்',
																		'யோசித்தான்',
																		'தொடங்கினான்',
																		'என்றான்',
																		'நின்றான்',
																		'சிரித்தான்',
																		'கொண்டான்',
																		'தோன்றினாள்',
																		'கேட்டாள்',
																		'சிரித்தாள்',
																		'என்றாள்',
																		'புரிந்தாள்',
																		'மறைந்தாள்'
														]    

										var diacritics 	= 	{
																	'\u0bbf':true,
																	'\u0bcd':true, 
																	'\u0B80':true, 
																	'\0B81':true, 
																	'\0B82':true,
																	 '\u0B83':true,
																	 '\u0B84':true, 
																	'\u0B8B':true, 
																	'\u0B8C':true, 
																	'\u0B8D':true,
																	'\u0B91':true, 
																	'\u0B96':true, 
																	'\u0B97':true, 
																	'\u0B98':true, 
																	'\u0B9B':true, 
																	'\u0B9D':true, 
																	'\u0BA0':true, 
																	'\u0BA1':true,
																	 '\u0BA2':true, 
																	'\u0BA5':true, 
																	'\u0BA6':true, 
																	'\u0BA7':true, 
																	'\u0BAB':true, 
																	'\u0BAC':true, 
																	'\u0BAD':true, 
																	'\u0BB6':true, 
																	'\u0BB8':true, 
																	'\u0BB9':true, 
																	'\u0BBA':true, 
																	'\u0BBB':true, 
																	'\u0BBC':true, 
																	'\u0BBD':true, 
																	'\u0BBE':true, 
																	'\u0BBF':true,
																	'\u0BC0':true, 
																	'\u0BC1':true,
																	 '\u0BC2':true, 
																	'\u0BC3':true,
																	 '\u0BC4':true, 
																	'\u0BC5':true, 
																	'\u0BC6':true, 
																	'\u0BC7':true, 
																	'\u0BC8':true, 
																	'\u0BC9':true, 
																	'\u0BCA':true, 
																	'\u0BCB':true, 
																	'\u0BCC':true, 
																	'\u0BCD':true, 
																	'\u0BCE':true, 
																	'\u0BCF':true, 
																	'\u0BD1':true, 
																	'\u0BD2':true, 
																	'\u0BD3':true, 
																	'\u0BD4':true, 
																	'\u0BD5':true, 
																	'\u0BD6':true, 
																	'\u0BD7':true, 
																	'\u0BD8':true, 
																	'\u0BD9':true, 
																	'\u0BDA':true, 
																	'\u0BDB':true, 
																	'\u0BDC':true, 
																	'\u0BDD':true, 
																	'\u0BDE':true, 
																	'\u0BDF':true, 
																	'\u0BE0':true, 
																	'\u0BE1':true, 
																	'\u0BE2':true, 
																	'\u0BE3':true, 
																	'\u0BE4':true, 
																	'\u0BE5':true,
																	'\u0BE6':true, 
																	'\u0BE8':true, 
																	'\u0BE9':true, 
																	'\u0BEA':true, 
																	'\u0BEB':true, 
																	'\u0BEC':true,
																	'\u0BEF':true,
																	'\u0BF0':true, 
																	'\u0BF1':true,
																	'\u0BF2':true, 
																	'\u0BF3':true, 
																	'\u0BF4':true, 
																	'\u0BF5':true, 
																	'\u0BF6':true, 
																	'\u0BF7':true, 
																	'\u0BF8':true, 
																	'\u0BF9':true, 
																	'\u0BFA':true, 
																	'\u0BFB':true, 
																	'\u0BFC':true, 
																	'\u0BFD':true, 
																	'\u0BFE':true, 
																	'\u0BFF':true
													}
		
		var modifiedMOAValue1 = {
				"சுமார்":" About",
				"நானூற்று":" நான்கு + நூறு = Four + hundred",
				"எண்பது":" eighty",
				"வருடங்களுக்கு	":" வருடங்கள் + க் + உ=years",
				"முன்":"ago",
				"ஆந்திர":"Andhra",
				"மாநிலத்தில்":" மாநிலம் + த் +இல் = state",
				"உள்ள":" in",
				"ஒரு	":"one",
				"சிற்றூரில்":" சிறுமை + ஊர் + இல்= small+village",
				"ஓர்":" a",
				"ஏழை":"Poor",
				"அந்தணக்":"Brahmin",
				"குடும்பத்தில்":" குடும்பம் + இல் = Family",
				"பிறந்தான்	":" பிறந்து + ந் + ஆன்=(Past Tense)",
				"தெனாலிராமன்	":"Thenaliraman",
				"இளமையிலேயே":" இளமை + இல் + ஏ =Young",
				"அவன்":" he",
				"தன்":" his",
				"தந்தையை":" தந்தை +ய்+ ஐ = Father",
				"இழந்தான்":" இழந்து + ந் + ஆன் (Past Tense) =  was Lost(Loose)",
				"அதனால்":" அதன் + ஆல் = So",
				"அவனும்":" அவன் + உம் = he",
				"அவனுடைய":" அவன் + உடை+ அ = his",
				"தாயாரும்	":" தாயார் + உம் = Mother",
				"தெனாலி":"Thenali",
				"வசித்து":" வசி + த் + உ= live (Past Tense)= Lived",
				"அவனுடைய":" அவன் + உடை+ அ =his",
				"தாய் மாமன்":" Maternal Uncle",
				"ஆதரவில்":" ஆதரவு + இல் = support Of",
				"வாழ்ந்து":" வாழ்+ ந் + உ = Lived",
				"வந்தனர்":" வந்து+ இன் + அர்= (Past Tense)",
				"தெனாலிராமனுக்கு":" ராமன்+ க்+உ =   Thenaliraman for  ",
				"பள்ளி":" School",
				"சென்று":" செல்+ ற்+ உ",
				"படிப்பது":" படி+ப்+அது(Past Tense)=study was",
				"கசந்தது":" கசந்து+த்+உ= Very Hard",
				"ஆனால்":" But",
				"அறிவுக்கூர்மையும்":"Intelligence",
				"நகைச் சுவையாகப்":" நகைசுவை+ ஆக = Comedy sense  of ",
				"பேசக்கூடிய":"Speech",
				"திறனும்":"",
				"இயற்கையாகவே":" இயற்கை+ஆக+ஏ = Naturally",
				"பெற்றிருந்தான்":" பெற்று+இரு+ந்+ஆன்=(Past Tense)= he acquired",
				"வீட்டுத்தலைவர்	":" Father’s",
				"இல்லாத":"absense",
				"காரணத்தால்":" காரணம்+த்+ஆல்= reason",
				"குடும்பத்தைக்":" குடும்பம்+ஐ= family",
				"காப்பாற்ற":" காப்பாற்று + அ=to  Look",
				"வேண்டிய நிலை":" வேண்டு+இய =  had been Compelled",
				"தெனாலி ராமனுக்கு":"Thenaliraman to",
				"ஏற்பட்டது":" ஏற்பட்டு+ட்+அது = (PasTense)=  Happned.",
				"அதனால்":" அதன்+ஆல்= So",
				"என்ன":"what",
				"செய்வது":" செய்+வ்+அது =  to do",
				"அவனை":" he",
				"வாட்டியது":" வாட்டி+ட்+அது=worried",
				"ஒருநாள்":" One day",
				"தெனாலிக்கு":" தெனாலி+க்+உ= Thenali ",
				"ஒரு":"one (a)",
				"முனிவர்":"Sage",
				"வந்தார்":" வந்து+த்+ஆர்=(Past Tense)=came",
				"அவர்":"he",
				"இராமனின்":" இராமன்+இன்=raman",
				"நிலையைக்கண்டு":"Looking at the state of",
				"அவனுக்கு	":"அவன்+க்+உ= he",
				"ஒரு":"one",
				"மந்திரத்தைக்":"மந்திரம்+த்+ஐ=mantra",
				"கற்றுக்கொடுத்தார்":" கொடு+த்+ஆர்= (Past Tense)= Preached",
				"அந்த":" This ",
				"மந்திரத்தை":" மந்திரம்+த்+ஐ=mantra",
				"பக்தியுடன்":" பக்தி+உடன்=",
				"ஜபித்தால்	":" ஜபித்து+ஆல்= By depicting",
				"காளி":"kaali",
				"பிரசன்ன மாவாள்":" பிரசன்னம்+ ஆ+ஆள் = (FutureTense)=will appears",
				"சொல்லிச் சென்றார்":" செல்+ற்+ஆர் =he said",
				"அதன்படியே":" owing to this",
				"இராமனும்":" இராமன்+உம்=Raman",
				"ஊருக்கு":"place",
				"வெளியே":"  Outside",
				"இருந்த":" residing",
				"காளி":" kaali",
				"கோயிலுக்குச்":" கோயில்+க்+உ= temple",
				"சென்று":" went",
				"முனிவர்":" sage",
				"கற்றுக் கொடுத்த":" கொடு+த்+அ=(PastTense)=Preached",
				"மந்திரத்தை":" மந்திரம்+த்+ஐ=mantra",
				"நூற்றியெட்டு":" 108",
				"முறை":"times",
				"ஜெபித்தான்":" ஜபித்து+ஆன்= (Past Tense)= depicts",
				"காளி":"kaali",
				"பிரசன்னமாகவில்லை":" does not appears",
				"இராமன்":"raman",
				"யோசித்தான்":" யோசி+த்+ஆன்= thought",
				"சட்டென்று":" Suddenly",
				"அவனுக்கு	":" he",
				"நினைவுக்கு":" நினைவு+க்+உ = remembers",
				"வந்தது":" வா+த்+ந்+அது",
				"முனிவர்":"Sage",
				"சொன்னது":"said",
				"ஆயிரத்துஎட்டு":"108",
				"முறை":"times",
				"உடனே":" Immediately",
				"மீண்டும்":" again",
				"கண்களை":" கண்கள்+ஐ= eyes",
				"மூடிக் கொண்டு":" closed",
				"காளியை":" kaali",
				"ஜெபிக்கத்":" praying",
				"தொடங்கினான்":" தொடங்கு+இன்+ஆல்(Past Tense)= Started",
				"இரவும்":" இரவு+உம்",
				"வந்து விட்டது":" வந்து+விட்டு+அது=(Past Tense)= has arrived",
				"ஆனாலும்	":"ஆனால்+உம்= But",
				"இராமன்":" Raman",
				"காளி":"kaali", "கோயிலை விட்டு":"கோயில்+ஐ+ விட்டு= Temple",
					"அகலவில்லை":"did not left",
				"திடீரென்று":" திடீர்+என்று = Suddenly",
				"காளி":"kaali",
				"அவன்":" him",
				"எதிரே":" in front of ",
				"தோன்றினாள்":" தோன்று+இன்+ஆல்=(Past Tense)=appeared ",
				"என்னை":"me",
				"ஏன்":" why",
				"அழைத்தாய்":" அழை+த்+ஆய்=(Past Tense)= called ",
				"உனக்கு":" you",
				"என்ன":" what",
				"வேண்டும்":"want",
				"கோபமாகக்":" கோபம்+ஆக= angrily",
				"கேட்டாள்":" கேட்டு+ட்+ஆள்=(Past Tense)= asked",
				"காளி":"kaali",
				"அவளை":" BY Kaali",
				"வணங்கி":" வணங்கு+இ= blessed",
				"எழுந்த":" எழுந்து+அ  =",
				"இராமன்":" raman",
				"கைகளைக்	":" கைகள்+ஐ=hands",
				"கூப்பித்":"",
				"தொழுதவாறே":"holding",
				"கேட்டான்":" கேட்டு+ட்+ஆன்= (Past Tense)= asked",
				"தாயே":"Oh mother",
				"நானோ":"am",
				"வறுமையில்":"வறு மை+இல்= starving",
				"வாடுகிறேன்":"வாடு+கிறு+ஏன்=(Present tense)hardship",
				"என்	":"I am",
				"வறுமை":" Hardship",
				"அகலும்":"eradicate",
				"வழியும்":"வழி+உம்= enhace",
				"நல்லறிவும்":"நல்லறிவு+உம்=Knowledge",
				"தரவேண்டுகிறேன்":" appealing",
				"காளி":" Kaali",
				"பெரிதாகச்":"பெரிது+ஆக= tremendously",
				"சிரித்தாள்	":"சிரி+த்+ஆள்=(Past Tense)= laughed",
				"உனக்கு":" you",
				"பேராசைதான்":"too greedy",
				"கல்வியும்":"கல்வி+உம்= Education",
				"வேண்டும்":" வேண்டு+உம்=need",
				"செல்வமும்":"wealth",
				"வேண்டுமா":" வேண்டும்+ஆ",
				"ஆம் தாயே":" Yes Mother",
				"புகழடையக்":" புகழ்+அடைய=Attain renown",
				"கல்வி":" Education",
				"வேண்டும்	":" required",
				"வறுமை":" Hardship",
				"நீங்கப்":"to eradicate",
				"பொருள்":"wealth",
				"வேண்டும்":"needed",
				"இரண்டையும்":" both",
				"தந்து":" தா+ந்+உ=",
				"அருள்":"  bless",
				"செய்ய":"with me",
				"என்றான்":"	என்று+ஆன்=said",
				"இராமன்":"raman",
				"காளி":" Kaali",
				"புன்னகையுடன்	":" புன்னகை+உடன்= with smile",
				"தன்	":"her",
				"இரண்டு":"both",
				"கரங்களை":" கரங்கள்+ஐ=hands",
				"நீட்டினாள்":" நீட்டி+ஆள்=(Past Tense)=has shown",
				"அதில்":"there",
				"இரண்டு":" two ",
				"கிண்ணங்கள்":"bowls were",
				"பாலுடன்":" பால்+உடன=milk",
				"வந்தன":" வா+த்(ந்)+த்+அன்+அ=(Past Tense)came",
				"அந்தக்":"that",
				"கிண்ணங்களை	":" கிண்ணங்கள்+ ஐ=bowls",
				"இராமனிடம்":" இராமன்+இடம்=to raman",
				"தந்தாள்":" தா+த்(ந்)+ஆள்=(Past Tense)=gave",
				"காளி":"Kaali",
				"இராமா":" Rama",
				"இந்த":"these",
				"இரண்டு":"both",
				"கிண்ணங்களிலும்":" கிண்ணங்கள்+இல்+உம்=bowls ",
				"உள்ள":" in",
				"பால்":"milk",
				"மிகவும்":"very ",
				"விசேஷமானது":" special",
				"வலது":"right",
				"கிண்ணம்	":"bowl",
				"கல்வி":"Education",
				"இடது":"Left side",
				"கிண்ணம்":"bowl",
				"செல்வம்":"wealth",
				"நீ":" You",
				"ஒரு":"one",
				"கிண்ணத்திலுள்ள":" கிண்ணம்+இல்+உள்ள=bowl of",
				"பாலை":"milk",
				"மட்டுமே":" only",
				"குடிக்க":" குடி+க்+அ=(Future Tense)=have to drink",
				"வேண்டும்":"",
				"உனக்கு":"You",
				"எது":"what",
				"மிகவும்":"actually",
				"தேவையோ":"need",
				"அந்தக்":" that much",
				"கிண்ணத்தின்":" கிண்ணம்+இன்=bowl",
				"பாலை":"milk",
				"மட்டும்":" only ",
				"குடி":"drink",
				"என்றாள்":" என்று+ஆள்=she said",
				"புன்னகையுடன்":"with smile",
				"இராமன்":"Raman",
				"என்ன":"What",
				"தாயே!":"Mother",
				"நான்":" I",
				"இரண்டையும்":"Both",
				"தானே":"",
				"கேட்டேன்":" கேட்டு+ஏன்= asked",
				"ஒரு":"one",
				"கிண்ணத்தை":"bowl",
				"மட்டும்":"only",
				"அருந்தச்":" அருந்து+அ=drink",
				"சொல்கிறாயே":" சொல்கிறாய்+ஏ =she told",
				"நான்":"  I",
				"எதை":"what to",
				"அருந்துவது":" அருந்து+வ்+அது=drink",
				"தெரியவில்லையே":"don’t know",
				"என்று":"",
				"சற்று நேரம்":" for a while",
				"சிந்திப்பது":" thinking",
				"போல":"like",
				"நின்றான்":" நின்று+ஆன்=(PastTense)=stood",
				"பிறகு":"",
				"சட்டென்று":"suddenly",
				"இடது":"left",
				"கரத்திலிருந்த":" கரத்தில்+இருந்த=hand",
				"பாலை":"milk",
				"வலது":"right",
				"கரத்திலிருந்த":"hand",
				"கிண்ணத்தில்":"bowl",
				"கொட்டிவிட்டு":"poured",
				"அந்தக்":"that ",
				"கிண்ணத்துப்":"bowls",
				"பாலை":"milk",
				"மடமடவெனக்":"vigorously",
				"குடித்து விட்டுச்":" குடி+த்+உ=(Past Tense)=drank",
				"சிரித்தான்":" சிரி+த்+ஆன்=(Past Tense)smiled",
				"காளி":"Kaali",
				"திகைத்து":"stuned.",
				"நின்றாள்":" நின்று+ஆள்=(Past Tense)= stunned were",
				"நான்":" I ",
				"உன்னை":"You",
				"ஒரு":"one",
				"கிண்ணத்திலுள்ள":"bowl of",
				"பாலைத்தானே	":" milk",
				"குடிக்கச்":"குடி+க்+அ=drink",
				"சொன்னேன்":"told",
				"ஆம் தாயே	":" yes mother",
				"நானும்":"me also",
				"ஒரு":"one",
				"கிண்ணத்துப்	":"bowl",
				"பாலைத்தானே":"milk",
				"குடித்தேன்":" குடி+த்+ஏன்=(Past Tense)=drank",
				"என்றான்":" என்று+ஆன்=said by him",
				"ஏன்":" Why",
				"இரண்டையும்":" both",
				"ஒன்றாகக்":"together",
				"கலந்தாய்	":" கலந்து+ஆய்=mixed",
				"கலக்கக் கூடாது":"mix or not",
				"என்று":"",
				"நீ":"you",
				"சொல்லவில்லையே":"did not inform",
				"தாயே":"mother(me)",
				"காளி":" Kaali",
				"புன்னகை	":"smiled",
				"புரிந்தாள்	":" புரி+த்(ந்)+ஆள்= (Past Tense)=furiously",
				"இராமா":"Rama",
				"என்னையே":"me itslf",
				"ஏமாற்றி":" ஏமாற்று+அ=cheated",
				"விட்டாய்":"you",
				"நீ":" You",
				"பெரும்":"great",
				"புலவன்":"poet",
				"பெயர்":"Name",
				"பெறாமல்	":" rather",
				"விகடகவி	":" vigadakavi	",
				"பெயர்":"name",
				"பெறுவாய்	":"பெறு+வ்+ஆய்= (Futur Tense)= will be named",
				"வரம்":" Blessed",
				"தந்து விட்டு":"",
				"மறைந்தாள்":" மறை+த்(ந்)+த்+ஆள்(Past Tense)=Disappeared",
				"இராமன்":"Rman",
				"விகடகவி	":"vigadakavi",
				"என்று":"",
				"சொல்லிப்பார்த்துச்":" பார்+த்+த்+உ= saying himself",
				"சிரித்துக்":" சிரி+த்+த்+உ=(Past Tense)=Laughed",
				"கொண்டான்":" கொண்டு+ஆன்",
				"திருப்பிப்":" Reversly",
				"படித்தாலும்":" படி+த்+ஆ+உம்=Read",
				"விகடகவி	":"Vigadakavi",
				"வருகிறதே":" வருகிறது+ஏ=remains same",
				"மகிழ்ந்தான்":" மகிழ்+த்(ந்)+த்+ஆன்= EXclaimed",
				};
								
$(document).ready(function()
{
		$('#loader').hide();
		$('#browse').hide();
		$('.jumbotron').hide();
		$("#brows").click(function()
		{
				$('#browse').trigger('click');
		});
		$(".form-control").click(function() 
		{
				$('.jumbotron').html(" ");
				$('.form-control').css('background-color','rgb(255, 255, 255)');
				$('.jumbotron').hide();
				$('#loader').show();
		});
		$('#chunk').click(function()
		{
				var 		construct 		=                         '<p class="lead">Bi-gram Chunking</p><br/>'+
																				'<p class="lead" >சிற்றூரில்  -  சிறுமை + ஊரில் - Small + Village</p>'+
																		        '<p class="lead"> வேப்பங்காயாகக் - வேய்ப்பம் + காயாக - Need + Seed</p>'+
																		        '<p class="lead">அறிவுக்கூர்மையும் - அறிவு+ கூர்மையும - Sharp + Brain</p>'+
																		        '<p class="lead">வீட்டுத்தலைவர் - வீட்டு+தலைவர்  - Home + Leader</p>'+
																		        '<p class="lead">இயற்கையாகவே - இயற்கை + ஆகவே - By + Nature </p>'+
																		        '<p class="lead">N-gram Chunking</p><br/>'+
																		        '<p class="lead">நிலையைக்கண்டு -  நிலையை + கண்டு - To + the + Situation</p>'+
																		        '<p class="lead">பிரசன்னமாகவில்லை - பிரசன்னம்+ ஆக+இல்லை - Wont + be + Visible</p>'+
																		        '<p class="lead"> தெரியவில்லையே - தெரிய +இல்லை+ எய் - Dont + Know </p>';
//																		        '<p class="lead">ஆசாபாசங்கள்</p>'+
//																		        '<p class="lead">ஆரவாரம்</p>'+
//																		        '<p class="lead">கையமர்த்திச்</p>'+
//																		        '<p class="lead">முடியாவிட்டால்</p>'+
//																		        '<p class="lead">இனிமையானவராக</p>'+
//																		        '<p class="lead">சீண்டிப்பார்க்க</p>'+
//																		        '<p class="lead">நகைச்சுவையுண்டு</p>'+
//																		        '<p class="lead">காண்பதற்காக</p>'+
//																		        '<p class="lead">துணிமணிகளை</p>'+
//																		        '<p class="lead">நிரூபிப்பது</p>'+
//																		        '<p class="lead">அவமானப்படுத்திவிட்டாய்</p>';
																				$('#chunking').html(construct);
		});
		$("#analyse").click(function() 
		{
				var 		enteredText 		= 		$('.form-control').val();
				if(enteredText.length!=0)
				{
						analyze();
				}
				else
				{
						$('.form-control').css('background-color','rgb(170, 170, 170)');
						$('#loader').hide();
				}
		});
		$("#filtered").click(function() 
		{
			if(filterflag)
			{
				var 		enteredText 		= 		$('.form-control').val();
				if(enteredText.length!=0)
				{
						filternow();
				}
				else
				{
						$('.form-control').css('background-color','rgb(170, 170, 170)');
						$('#loader').hide();
				}
			}
			else
			{
				alert("Please Complete the analyzing part first to proceed");
			}
				
		});
		$("#posanalyse").click(function() 
		{
					var 		enteredText 	= 		$('.form-control').val();
					if(enteredText.length!=0)
					{
							posanalyze();
					}
					else
					{
							$('.form-control').css('background-color','rgb(170, 170, 170)');
							$('#loader').hide();
					}
		});
		$("#namedentity").click(function() 
		{
					var 		enteredText 	= 		$('.form-control').val();
					if(enteredText.length!=0)
					{
							namedentity();
					}
					else
					{
							$('.form-control').css('background-color','rgb(170, 170, 170)');
							$('#loader').hide();
					}
		});
});
function uploadCompanyLogo(companyLogElement)
{
				var imageObject	 		 =		new Object();
				if (companyLogElement.files && companyLogElement.files[0])
				{
						var reader 				= 		new FileReader();
						reader.onload = function (e)
						{	
								var 	himageObject	 		=		e.target.result;
								console.log("imageObjec ::t"+himageObject);
								$('#textfile').val(himageObject);
						}
						reader.readAsText(companyLogElement.files[0], "UTF-8");
				}
				else
				{
						console.info("No files Chosen");
				}
}
function posanalyze()
{
			var 	textsplit						= 		new Array();
			var 	trees 							= 		new Array();
			var 	build 							= 		"";
			var 	matchingelement 				= 		"";
			textsplit 								=		 $('.form-control').val().trim().split(" ");
			for(var eachword=0; eachword<textsplit.length; eachword++)
			{
					var 		id 					= 		textsplit[eachword];
					var 		lastChar 			= 		id.substr(id.length - 3); 
					var 		twochar 			= 		id.substr(id.length - 2);
					console.log("id::"+ id)
					console.log(lastChar);
					if(lastChar=="வள்")
					{
							console.log("1");
							build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Subject</a> </p';
							$('.jumbotron').append(build+'<br/>');
							$('.jumbotron').append(textsplit[eachword]+'<br/>');
							$('.jumbotron').append('<hr>');
					}
					if(lastChar==="றகு" || lastChar==="ும்"  || lastChar==="ில்" || lastChar==="ால்" || lastChar==="னவே" ||lastChar==="்றி"   || lastChar==="க்க")
					{
							console.log("aana");
							build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Conjunction</a> </p';
							$('.jumbotron').append(build+'<br/>');
							$('.jumbotron').append(textsplit[eachword]+'<br/>');
							$('.jumbotron').append('<hr>');
					}
					if(lastChar==="ான" || twochar==="ான" || lastChar==="ந்த" || lastChar==="த்த")
					{
							console.log("aana");
							build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Adjective</a> </p';
							$('.jumbotron').append(build+'<br/>');
							$('.jumbotron').append(textsplit[eachword]+'<br/>');
							$('.jumbotron').append('<hr>');
					}
					if(
							id=== "குறித்து"||
							id=== "மேலே"||
							id=== "குறுக்காக"||
							id=== "பிறகு"||
							id=== "எதிராக"||
							id=== "இடையில்"||
							id=== "இடத்தில்"||
							id=== "அருகில்"||
							id=== "எதிரே"||
							id=== "முன்பாக"||
							id=== "பின்னால்"||
							id=== "கீழே"||
							id=== "அடியில்"||
							id=== "இடையே"||
							id=== "அப்பால்"||
							id=== "ஆயினும்"||
							id=== "உள்ளே"||
							id=== "வெளியே"||
							id=== "விட"||
							id=== "வரையில்"||
							id=== "தவிர"||
							id=== "பக்கத்தில்"||
							id=== "முன்பாக"||
							id=== "குறித்து"
					)
					{
							console.log("aana");
							build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Preposition</a> </p';
							$('.jumbotron').append(build+'<br/>');
							$('.jumbotron').append(textsplit[eachword]+'<br/>');
							$('.jumbotron').append('<hr>');
					}
					if(lastChar==="மாக")
					{
							console.log("aana");
							build	=		'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Adverb</a> </p';
					 		$('.jumbotron').append(build+'<br/>');
					 		$('.jumbotron').append(textsplit[eachword]+'<br/>');
					 		$('.jumbotron').append('<hr>');
					}
					if(id=== "அது" || id=== "இது" || id=== "எது")
					{
							console.log("aana");
							build	=		'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Pronoun</a> </p';
							$('.jumbotron').append(build+'<br/>');
							$('.jumbotron').append(textsplit[eachword]+'<br/>');
							$('.jumbotron').append('<hr>');
					}
					if(lastChar=="ில்")
					{
							console.log("2");
							build	=		'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Object</a> </p';
							$('.jumbotron').append(build+'<br/>');
							$('.jumbotron').append(textsplit[eachword]+'<br/>');
							$('.jumbotron').append('<hr>');
					}
					if((lastChar=="ாள்") || (lastChar=="யது") || (lastChar=="வது") || (lastChar=="டது") || (lastChar=="்து") || (lastChar=="து.") || (lastChar=="்!") || (lastChar=="பது") ||(lastChar=="டன் "))
					{
							console.log("3");
							build	=		'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Verb</a> </p';
							$('.jumbotron').append(build+'<br/>');
							$('.jumbotron').append(textsplit[eachword]+'<br/>');
							$('.jumbotron').append('<hr>');
					}
					if((lastChar=="ன்") || (lastChar=="னை") ||(lastChar=="ான்") ||(lastChar=="வர்") || (lastChar=="ன்.") || (lastChar=="வளை") || (lastChar=="ள்."))
					{
							console.log("4");
							build	=		'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Subject</a> </p';
							$('.jumbotron').append(build+'<br/>');
							$('.jumbotron').append(textsplit[eachword]+'<br/>');
							$('.jumbotron').append('<hr>');
					}
			}
			$('#loader').hide();
			$('.jumbotron').show();
}
function namedentity()
{
	var 	textsplit						= 		new Array();
	var 	trees 							= 		new Array();
	var 	build 							= 		"";
	var 	matchingelement 	= 		"";
	textsplit 								=		 $('.form-control').val().trim().split(" ");
	var sentences						= 		new Array();
	sentences							= 		 $('.form-control').val().trim();
	sentences = sentences.split(/[\\.!\?]/);
	translateArray.push("Venus from the Sun in the Solar System is the second one located");
	translateArray.push("Venus is the next bright moon in the night sky");
	translateArray.push("Before sunrise , sunset behind the silver reaches his uccappirakacattai , the morning star and the evening star that call is atalale");
	translateArray.push("The household, the planet of the solar atmosphere is very warm venus");
	translateArray.push("Silver has been used for thousands of years");
	translateArray.push("The money was used by the Romans as Silver");
	translateArray.push("Moreover, silver is used to prevent infections and lesions");
	translateArray.push("Silver and silver ankilappeyarana words taken from the only one of the English language");
	translateArray.push("This matippumikkatanat silver coins and bars around the world are bought and sold in stores");
	translateArray.push("Made in silver mug, dinner plate , bowl and utensils , such as it is seen by many well- known , well- grate poured a malaiyakum can takatakka");
	translateArray.push("On Friday a week ( a week ) for one day in the seven days");
	translateArray.push("Saturday comes after Friday");
	translateArray.push("Day is regarded as belonging to the silver kolmin");
	translateArray.push("Many of the followers of religions into Friday nannalakak (Holy Day ) consider");
	translateArray.push("In many Islamic countries, Muslims holy day on Friday, the Friday holiday");
	translateArray.push("This is one of those countries is due Friday weekend");
	translateArray.push("A silver medal at the Games , the Olympic Games , Commonwealth Games is the second receiver ");
	translateArray.push("Cuddalore district of Tamil Nadu state in India on Friday, the beach is a beach located in the ");
	translateArray.push("Britain is the main beach area of Fort St. David Silver");
	meaningArray.push("Planet");
	meaningArray.push("Planet");
	meaningArray.push("Planet");
	meaningArray.push("Planet");
	meaningArray.push("Ornaments / Metal");
	meaningArray.push("Ornaments / Metal");
	meaningArray.push("Ornaments / Metal");
	meaningArray.push("Ornaments / Metal");
	meaningArray.push("Currency");
	meaningArray.push("Ornaments / Metal");
	meaningArray.push("Weekday");
	meaningArray.push("Weekday");
	meaningArray.push("Weekday");
	meaningArray.push("Weekday");
	meaningArray.push("Weekday");
	meaningArray.push("Weekday");
	meaningArray.push("Appreciaiion");
	meaningArray.push("Beach / place");
	meaningArray.push("Beach / Place");
	var p = 0;
	for(var k=0;k<=sentences.length;k++)
	{
			console.log("sentences :: "+sentences[k]);
			
			if(($.trim(sentences[k]).indexOf("வெள்ளி") > -1)&&($.trim(sentences[k]).length>1))
			{
				var insidearray = new Array();
				insidearray = $.trim(sentences[k]).split(" ");
				for(var love=0;love<=insidearray.length-1;love++)
				{
					if(($.trim(insidearray[love]).indexOf("வெள்ளி") > -1)&&($.trim(insidearray[love]).length>1))
					{
								$('.jumbotron').append('<span class="decorate">'+insidearray[love]+" "+'</span'+" ");
					}
					else
					{
							$('.jumbotron').append(insidearray[love]+" ");
					}
				}
				$('.jumbotron').append('<br/>');
				$('.jumbotron').append('<br/>');
				$('.jumbotron').append("Meaning Refers to - " +translateArray[p]);
				$('.jumbotron').append('<br/>');
				$('.jumbotron').append('<br/>');
				$('.jumbotron').append("Here <span class='decorate'> வெள்ளி  </span> denotes to - " +meaningArray[p]);
				$('.jumbotron').append('<br/>');
				$('.jumbotron').append('<br/><hr>');
				p++;
			}
	}
	console.log("dsfsdsfd :: "+sentences);
	for(var eachword=0; eachword<textsplit.length; eachword++)
	{
			var 	id 						= 		textsplit[eachword];
			var	lastChar 				= 		id.substr(id.length - 4); 
			console.log("id::"+ id)
			console.log(lastChar);
			need.push(lastChar);
			 if(
					   (lastChar=="ாமன்") ||
					   (lastChar=="தான்") || 
					   (lastChar=="மன்.") || 
					   (lastChar=="அவன்") || 
					   (lastChar=="ான்") || 
					   (lastChar=="ாமன்.") || 
					   (lastChar=="ான்.") || 
					   (lastChar=="அவனை") ||
					   (lastChar=="அவர் ") ||
					   (lastChar=="ார்.")||
					   (lastChar=="")||
					   (lastChar=="ிவர் ")||
					   (lastChar=="றான்")||
					   (lastChar=="ாமா!")||
					   (lastChar=="ரின் ")||
					   (lastChar=="தான் ")||
					   (lastChar=="வர். ")||
					   (lastChar=="றார்")||
					   (lastChar=="ாமனோ")||
					   (lastChar=="டார்")||
					   (lastChar=="ான்.")||
					   (lastChar=="றார்")||
					   (lastChar=="ாரனை")
			   )
			 {
					 if(textsplit[eachword].length>0)
					 {
						 	console.log("3");
						 	build  =  '<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Male Gender</a> </p';
						 	$('.jumbotron').append(build+'<br/>');
						 	$('.jumbotron').append(textsplit[eachword]+'<br/>');
						 	$('.jumbotron').append('<hr>');
					}
			 }
			 else if(
						 (lastChar=="வாள்") || 
						 (lastChar=="தாய்") ||
						 (lastChar=="அவளை") ||
						 (lastChar=="தாயே") || 
						 (lastChar=="றாள்.") || 
						 (lastChar=="வளை") ||
						 (lastChar=="அவள்.") ||
						 (lastChar=="ள்.") 
					)
			 {
				 	if(textsplit[eachword].length>0)
				 	{
				 			console.log("4");
				 			build='<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">Female Gender</a> </p';
				 			$('.jumbotron').append(build+'<br/>');
				 			$('.jumbotron').append(textsplit[eachword]+'<br/>');
				 			$('.jumbotron').append('<hr>');
				 	}
			 }
	}
			$('#loader').hide();
			$('.jumbotron').show();
}
function filternow()
{
	var 		enteredText 		= 		$('.form-control').val();
	if(enteredText.length!=0)
	{
		var checkforstories = enteredText.split(".");
		var story = "";
		if(checkforstories.length>0)
		{
				if(checkforstories[0].indexOf("கிருஷ்ணதேவராயருக்குப்")!=-1)
				{
					story = 2;
				}
				else if(checkforstories[0].indexOf("விஜயநகர")!=-1)
				{
					story = 3;
				}
				else if(checkforstories[0].indexOf("நானூற்று")!=-1)
				{
					story = 1;
				}
		}
	}
	$('.jumbotron').html("");
	
	for(var filtermorph=0;filtermorph<morpho.length;filtermorph++)
	{
		var 		build 							= 		"";
		var 		matchingelement 				= 		"";
		if( story ==1 || story == 2 || story ==3)
		{
			if(story == 1)
			{
				build						=	'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">'+morpho[filtermorph]+'</a> </p';
				$('.jumbotron').append(build+'<br/>');
				matchingelement = 			" { <br/>";
				matchingelement = matchingelement+spiltfilter[filtermorph]+'<br/>';
				for(var filterindex=0; filterindex<rootwordcollection.length;filterindex++)
				{
					if(spiltfilter[filtermorph].indexOf(rootwordcollection[filterindex])!=-1)
					{
						matchingelement = matchingelement+'Root Word'+'<br/>'+rootwordcollection[filterindex]+'<br/>';
						break;
					}
				}
				for(var suffix=0; suffix<suffixlist.length;suffix++)
				{
					if(spiltfilter[filtermorph].indexOf(suffixlist[suffix])!=-1)
					{
						matchingelement = matchingelement+'Suffix'+'<br/>'+suffixlist[suffix]+'<br/>';
						break;
					}
				}
				for(var sandhis=0; sandhis<sandhilist.length;sandhis++)
				{
					var splitfiltertwice = spiltfilter[filtermorph].split("+");
					for(var intelinside=0; intelinside<splitfiltertwice.length;intelinside++)
					{
						  if(spiltfilter[filtermorph].indexOf(splitfiltertwice[intelinside])!=-1)
						{
							  if($.trim(splitfiltertwice[intelinside]).length==2)
							{
								matchingelement = matchingelement+'Sandhi'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
							}
						}
						
					}
					break;
				}
				for(var predic=0; predic<predicate.length;predic++)
				{
					var splitfiltertwice = spiltfilter[filtermorph].split("+");
					for(var intelinside=0; intelinside<splitfiltertwice.length;intelinside++)
					{
						  if(spiltfilter[filtermorph].indexOf(splitfiltertwice[intelinside])!=-1)
						{
							  if($.trim(splitfiltertwice[intelinside]).length==1)
							{
								 if($.trim(splitfiltertwice[intelinside])=="உ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
								 else if($.trim(splitfiltertwice[intelinside])=="ஏ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
								 else if($.trim(splitfiltertwice[intelinside])=="அ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
								 else if($.trim(splitfiltertwice[intelinside])=="ஐ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
							}
						}
					}
					break;
				}
				for(var conju=0; conju<conjunction.length;conju++)
				{
					var splitfiltertwice = spiltfilter[filtermorph].split("+");
					for(var intelinside=0; intelinside<splitfiltertwice.length;intelinside++)
					{
						  if(spiltfilter[filtermorph].indexOf(splitfiltertwice[intelinside])!=-1)
						{
							
								 if($.trim(splitfiltertwice[intelinside])=="ஊர்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="உடை")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="இன்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="ஆக")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="கிறு")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="இல்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="அன்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="அது")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
						}
					}
					break;
				}
				for(var tense=0; tense<morpho.length;tense++)
				{
					if(morpho[filtermorph].indexOf(tenses[tense])!=-1)
					{
						console.log("morhp"+morpho[filtermorph]);
						console.log("filtermorph"+tenses[tense]);
						if(morpho[filtermorph]=="வாழ்ந்து")
						{
							matchingelement = matchingelement+'Present Tense - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}	
						else if(morpho[filtermorph]=="படிப்பது")
						{
							matchingelement = matchingelement+'Future Tense - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="ஜபித்தால்")
						{
							matchingelement = matchingelement+'Future Tense - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else
						{
							matchingelement = matchingelement+'Past Tense - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						break;
					}
				}
				for(var tense=0; tense<morpho.length;tense++)
				{
					if(morpho[filtermorph].indexOf(genderss[tense])!=-1)
					{
						if(morpho[filtermorph]=="பெற்றிருந்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}	
						else if(morpho[filtermorph]=="பிறந்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="இழந்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="ஜெபித்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="யோசித்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="தொடங்கினான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="என்றான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="நின்றான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="சிரித்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="கொண்டான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="தோன்றினாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="கேட்டாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="சிரித்தாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="என்றாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="புரிந்தாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						else if(morpho[filtermorph]=="மறைந்தாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho[filtermorph]+'<br/>';
						}
						break;
					}
				}
			}
			else if(story == 2)
			{

				build						=	'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">'+morpho2[filtermorph]+'</a> </p';
				$('.jumbotron').append(build+'<br/>');
				matchingelement = 			" { <br/>";
				matchingelement = matchingelement+spiltfilter2[filtermorph]+'<br/>';
				for(var filterindex=0; filterindex<rootwordcollection2.length;filterindex++)
				{
					if(spiltfilter2[filtermorph].indexOf(rootwordcollection2[filterindex])!=-1)
					{
						matchingelement = matchingelement+'Root Word'+'<br/>'+rootwordcollection2[filterindex]+'<br/>';
						break;
					}
				}
				for(var suffix=0; suffix<suffixlist2.length;suffix++)
				{
					if(spiltfilter2[filtermorph].indexOf(suffixlist2[suffix])!=-1)
					{
						matchingelement = matchingelement+'Suffix'+'<br/>'+suffixlist2[suffix]+'<br/>';
						break;
					}
				}
				for(var sandhis=0; sandhis<sandhilist.length;sandhis++)
				{
					var splitfiltertwice = spiltfilter2[filtermorph].split("+");
					for(var intelinside=0; intelinside<splitfiltertwice.length;intelinside++)
					{
						  if(spiltfilter2[filtermorph].indexOf(splitfiltertwice[intelinside])!=-1)
						{
							  if($.trim(splitfiltertwice[intelinside]).length==2)
							{
								matchingelement = matchingelement+'Sandhi'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
							}
						}
						
					}
					break;
				}
				for(var predic=0; predic<predicate.length;predic++)
				{
					var splitfiltertwice = spiltfilter2[filtermorph].split("+");
					for(var intelinside=0; intelinside<splitfiltertwice.length;intelinside++)
					{
						  if(spiltfilter2[filtermorph].indexOf(splitfiltertwice[intelinside])!=-1)
						{
							  if($.trim(splitfiltertwice[intelinside]).length==1)
							{
								 if($.trim(splitfiltertwice[intelinside])=="உ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
								 else if($.trim(splitfiltertwice[intelinside])=="ஏ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
								 else if($.trim(splitfiltertwice[intelinside])=="அ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
								 else if($.trim(splitfiltertwice[intelinside])=="ஐ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
							}
						}
					}
					break;
				}
				for(var conju=0; conju<conjunction.length;conju++)
				{
					var splitfiltertwice = spiltfilter2[filtermorph].split("+");
					for(var intelinside=0; intelinside<splitfiltertwice.length;intelinside++)
					{
						  if(spiltfilter2[filtermorph].indexOf(splitfiltertwice[intelinside])!=-1)
						{
							
								 if($.trim(splitfiltertwice[intelinside])=="ஊர்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="உடை")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="இன்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="ஆக")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="கிறு")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="இல்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="அன்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="அது")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
						}
					}
					break;
				}
				for(var tense=0; tense<morpho2.length;tense++)
				{
					if(morpho2[filtermorph].indexOf(tenses[tense])!=-1)
					{
						console.log("morhp"+morpho[filtermorph]);
						console.log("filtermorph"+tenses[tense]);
						if(morpho2[filtermorph]=="வாழ்ந்து")
						{
							matchingelement = matchingelement+'Present Tense - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}	
						else if(morpho2[filtermorph]=="படிப்பது")
						{
							matchingelement = matchingelement+'Future Tense - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="ஜபித்தால்")
						{
							matchingelement = matchingelement+'Future Tense - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else
						{
							matchingelement = matchingelement+'Past Tense - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						break;
					}
				}
				for(var tense=0; tense<morpho2.length;tense++)
				{
					if(morpho2[filtermorph].indexOf(genderss[tense])!=-1)
					{
						if(morpho2[filtermorph]=="பெற்றிருந்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}	
						else if(morpho2[filtermorph]=="பிறந்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="இழந்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="ஜெபித்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="யோசித்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="தொடங்கினான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="என்றான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="நின்றான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="சிரித்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="கொண்டான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="தோன்றினாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="கேட்டாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="சிரித்தாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="என்றாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="புரிந்தாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						else if(morpho2[filtermorph]=="மறைந்தாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho2[filtermorph]+'<br/>';
						}
						break;
					}
				}
			}
			else if(story == 3)
			{

				build						=	'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">'+morpho3[filtermorph]+'</a> </p';
				$('.jumbotron').append(build+'<br/>');
				matchingelement = 			" { <br/>";
				matchingelement = matchingelement+spiltfilter3[filtermorph]+'<br/>';
				for(var filterindex=0; filterindex<rootwordcollection3.length;filterindex++)
				{
					if(spiltfilter3[filtermorph].indexOf(rootwordcollection3[filterindex])!=-1)
					{
						matchingelement = matchingelement+'Root Word'+'<br/>'+rootwordcollection3[filterindex]+'<br/>';
						break;
					}
				}
				for(var suffix=0; suffix<suffixlist3.length;suffix++)
				{
					if(spiltfilter3[filtermorph].indexOf(suffixlist3[suffix])!=-1)
					{
						matchingelement = matchingelement+'Suffix'+'<br/>'+suffixlist3[suffix]+'<br/>';
						break;
					}
				}
				for(var sandhis=0; sandhis<sandhilist.length;sandhis++)
				{
					var splitfiltertwice = spiltfilter3[filtermorph].split("+");
					for(var intelinside=0; intelinside<splitfiltertwice.length;intelinside++)
					{
						  if(spiltfilter3[filtermorph].indexOf(splitfiltertwice[intelinside])!=-1)
						{
							  if($.trim(splitfiltertwice[intelinside]).length==2)
							{
								matchingelement = matchingelement+'Sandhi'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
							}
						}
						
					}
					break;
				}
				for(var predic=0; predic<predicate.length;predic++)
				{
					var splitfiltertwice = spiltfilter3[filtermorph].split("+");
					for(var intelinside=0; intelinside<splitfiltertwice.length;intelinside++)
					{
						  if(spiltfilter3[filtermorph].indexOf(splitfiltertwice[intelinside])!=-1)
						{
							  if($.trim(splitfiltertwice[intelinside]).length==1)
							{
								 if($.trim(splitfiltertwice[intelinside])=="உ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
								 else if($.trim(splitfiltertwice[intelinside])=="ஏ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
								 else if($.trim(splitfiltertwice[intelinside])=="அ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
								 else if($.trim(splitfiltertwice[intelinside])=="ஐ")
								 {
									 matchingelement = matchingelement+'Predicate'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								  }
							}
						}
					}
					break;
				}
				for(var conju=0; conju<conjunction.length;conju++)
				{
					var splitfiltertwice = spiltfilter3[filtermorph].split("+");
					for(var intelinside=0; intelinside<splitfiltertwice.length;intelinside++)
					{
						  if(spiltfilter3[filtermorph].indexOf(splitfiltertwice[intelinside])!=-1)
						{
							
								 if($.trim(splitfiltertwice[intelinside])=="ஊர்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="உடை")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="இன்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="ஆக")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="கிறு")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="இல்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="அன்")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
								 else if($.trim(splitfiltertwice[intelinside])=="அது")
								 {
									 matchingelement = matchingelement+'Conjunction'+'<br/>'+splitfiltertwice[intelinside]+'<br/>';
								 }
						}
					}
					break;
				}
				for(var tense=0; tense<morpho3.length;tense++)
				{
					if(morpho3[filtermorph].indexOf(tenses[tense])!=-1)
					{
						console.log("morhp"+morpho3[filtermorph]);
						console.log("filtermorph"+tenses[tense]);
						if(morpho3[filtermorph]=="வாழ்ந்து")
						{
							matchingelement = matchingelement+'Present Tense - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}	
						else if(morpho3[filtermorph]=="படிப்பது")
						{
							matchingelement = matchingelement+'Future Tense - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="ஜபித்தால்")
						{
							matchingelement = matchingelement+'Future Tense - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else
						{
							matchingelement = matchingelement+'Past Tense - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						break;
					}
				}
				for(var tense=0; tense<morpho3.length;tense++)
				{
					if(morpho3[filtermorph].indexOf(genderss[tense])!=-1)
					{
						if(morpho3[filtermorph]=="பெற்றிருந்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}	
						else if(morpho3[filtermorph]=="பிறந்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="இழந்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="ஜெபித்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="யோசித்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="தொடங்கினான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="என்றான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="நின்றான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="சிரித்தான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="கொண்டான்")
						{
							matchingelement = matchingelement+'Male Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="தோன்றினாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="கேட்டாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="சிரித்தாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="என்றாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="புரிந்தாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						else if(morpho3[filtermorph]=="மறைந்தாள்")
						{
							matchingelement = matchingelement+'Female Gender - '+'<br/>'+morpho3[filtermorph]+'<br/>';
						}
						break;
					}
				}
			}
			$('.jumbotron').append(matchingelement);
			matchingelement=" } ";
			$('.jumbotron').append(matchingelement+"<br/><br/>");
		}
	}
	if( story !=1 && story !=2 && story !=3)
	{
		$('.jumbotron').append("We are sorry ! Your content doesnt match our datasets.");
	}
}
function analyze()
{
	var 		textsplit						= 		new Array();
	var 		trees 							= 		new Array();
	var 		build 							= 		"";
	var 		matchingelement 				= 		"";
	filterflag				=	true;
	textsplit 									= 		$('.form-control').val().trim().split(" ");
	for(var eachword=0; eachword<textsplit.length; eachword++)
	{
			var 		character			=		textsplit[eachword].trim().substring(0,3);
			var 		printed 				= 		false;
			for(var k=0; k<textsplit.length; k++)
			{
					if(k!=eachword && textsplit[eachword].trim().length!=0)
					{
							if(textsplit[k].indexOf(character)!=-1)
							{
								if (trees.indexOf(textsplit[k]) > -1) 
								{
						   
								} 
								else
								{
										trees.push(textsplit[k]);
										if(!printed)
										{
												build						=			'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">'+textsplit[eachword]+'</a> </p';
												$('.jumbotron').append(build+'<br/>');
												matchingelement = 			" { <br/>";
												$('.jumbotron').append(matchingelement);
												printed 					= 			true;
										}
										$('.jumbotron').append(" &nbsp;&nbsp;[ ")
										textsplit[k]						= 			textsplit[k].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
										$('.jumbotron').append(textsplit[k]+ " - ");
										var 		tempList	 			= 			textsplit[k].split('');
										var 		targetList 			= 			[];
										for(var idx in tempList)
										{
												if(diacritics[tempList[idx]])
												{
													targetList[targetList.length - 1] +=  tempList[idx];
												}
												else
												{
													targetList.push(tempList[idx]);
												}
										}
										for(var target=0;target<targetList.length;target++)
										{
												targetList[target]	= 			targetList[target].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
												if(targetList[target].length>0)
												{
														console.log("length"+targetList[target].length);
														$('.jumbotron').append(targetList[target]+ " +  ");
												}
										}
										$('.jumbotron').append(" ], <br/>");
										var 	tosplitarray				=		" ";
//										for(var target=0;target<targetList.length;target++)
//										{
//												if(targetList[target].length>0)
//												{
//														if(targetList[target].length==2)
//														{
//																var 	sandhi 		= 		$.trim(targetList[target]);
//																console.info("sandhi :: "+sandhi);
//																var 	lastChar 		= 		sandhi.substr(sandhi.length - 1); 
//																console.log("sandhi lastchar is this :: "+lastChar);
//																if(lastChar==="்")
//																{
//																		console.log("alteast  is this :: "+lastChar);
//																		tosplitarray+=targetList[target];
//																		$('.jumbotron').append(tosplitarray+ " <br/> ");
//																}
//																else
//																{		
//																		tosplitarray+=targetList[target];
//																		$('.jumbotron').append(tosplitarray+ " <br/> ");
//																}
//														}
//														else
//														{
//																	tosplitarray+=targetList[target];
//																	$('.jumbotron').append(tosplitarray+ " <br/> ");
//														}
//												}
//										}
						for(var loop=0;loop<targetList.length;loop++)
						{
									var 		anotherarray			=		" ";
									var 		sandhiprinted 		= 		"false";
									for(var hole=0+loop;hole<targetList.length;hole++)
									{
											if(targetList[hole].length==2)
											{
													var 	sandhi 		= 			$.trim(targetList[hole]);
													console.info("sandhi :: "+sandhi);
													var 	lastChar 		= 			sandhi.substr(sandhi.length - 1); 
													console.log("sandhi lastchar is this :: "+lastChar);
													if(lastChar==="்")
													{
															console.log("atleast this is: "+lastChar);
															anotherarray+=targetList[hole];
															console.log("anotherarray list :: "+anotherarray)
															anotherarray= $.trim(anotherarray);
															if(sandhiprinted==="false")
															{
																console.log("comes in to sandhi pritned::")
																if(anotherarray==="புன்னகையுடன்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - புன்னகை+உடன்"+ " <br/> ");
																	$(".jumbotron").append(" புன்னகை- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" உடன்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="தெனாலிராமனுக்கு")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - தெனாலிராமன்+க்+உ "+ " <br/> ");
																	$(".jumbotron").append(" தெனாலிராமன்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" க்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" உ- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="குடித்தேன்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -குடி+த்+ஏன்"+ " <br/> ");
																	$(".jumbotron").append("குடி- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" த்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஏன்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="அவனுடைய")
																{
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -அவன்+ உடைய "+ " <br/> ");
																	$(".jumbotron").append(" அவன்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" உடைய- Suffix "+ " <br/> ");
																	
																}	
																else if(anotherarray==="கலந்தாய்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -கல+ந்+ஆய்"+ " <br/> ");
																	$(".jumbotron").append(" கல- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஆய்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");

																}	
																else if(anotherarray==="சுமார்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" சுமார்- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="நானூற்று")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" நானூற்று- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="எண்பது")
																{
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" எண்பது- Unknown "+ " <br/> ");
																}	
																else if(anotherarray==="வருடங்களுக்கு")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -வருடங்கள்+க்+ உ "+ " <br/> ");
																	$(".jumbotron").append(" வருடங்கள்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" க்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append("உ- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(sandhi==="முன்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" முன்- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="ஆந்திர")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஆந்திர- Noun "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="மாநிலத்தில்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - மாநிலம்+த்+ இல் "+ " <br/> ");
																	$(".jumbotron").append(" மாநிலம்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" த்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="உள்ள")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" உள்ள- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="ஒரு")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஒரு- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="சிற்றூரில்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - சிற்று+ ஊர்+ இல்"+ " <br/> ");
																	$(".jumbotron").append(" சிற்று- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" ஊர்- middle term "+ " <br/> ");
																	$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="ஏழை")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஏழை- Adjective "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="அந்தணக்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" அந்தணக்- Noun "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="குடும்பத்தில்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - குடும்பம்+இல்"+ " <br/> ");
																	$(".jumbotron").append(" குடும்பம்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="பிறந்தான்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - பிறந்து+ந்+ஆன் "+ " <br/> ");
																	$(".jumbotron").append(" பிறந்து- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஆன்- suffix word which represents male gender "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="இளமையிலேயே")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - இளமை+ இல்+ஏ "+ " <br/> ");
																	$(".jumbotron").append(" இளமை- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" இல்- Middle Term "+ " <br/> ");
																	$(".jumbotron").append(" ஏ-  Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="வந்தார்கள்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -  வா+ ந்+ஆர் + கள்"+ " <br/> ");
																	$(".jumbotron").append(" வா- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஆர்- Middle Term "+ " <br/> ");
																	$(".jumbotron").append(" கள்- Plural Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																	sandhiprinted = "true";
															}
															else
															{
																if(anotherarray==="புன்னகையுடன்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - புன்னகை+உடன்"+ " <br/> ");
																	$(".jumbotron").append(" புன்னகை- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" உடன்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="தெனாலிராமனுக்கு")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - தெனாலிராமன்+க்+உ "+ " <br/> ");
																	$(".jumbotron").append(" தெனாலிராமன்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" க்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" உ- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="குடித்தேன்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -குடி+த்+ஏன்"+ " <br/> ");
																	$(".jumbotron").append("குடி- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" த்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஏன்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="அவனுடைய")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -அவன்+ உடைய "+ " <br/> ");
																	$(".jumbotron").append(" அவன்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" உடைய- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																	
																}	
																else if(anotherarray==="கலந்தாய்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -கல+ந்+ஆய்"+ " <br/> ");
																	$(".jumbotron").append(" கல- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஆய்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="சுமார்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" சுமார்- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="நானூற்று")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" நானூற்று- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="எண்பது")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" எண்பது- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="வருடங்களுக்கு")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -வருடங்கள்+க்+ உ "+ " <br/> ");
																	$(".jumbotron").append(" வருடங்கள்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" க்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append("உ- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(sandhi==="முன்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" முன்- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="ஆந்திர")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஆந்திர- Noun "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="மாநிலத்தில்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - மாநிலம்+த்+ இல் "+ " <br/> ");
																	$(".jumbotron").append(" மாநிலம்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" த்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="உள்ள")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" உள்ள- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="ஒரு")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஒரு- Unknown "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="சிற்றூரில்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - சிற்று+ ஊர்+ இல்"+ " <br/> ");
																	$(".jumbotron").append(" சிற்று- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" ஊர்- middle term "+ " <br/> ");
																	$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="ஏழை")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஏழை- Adjective "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="அந்தணக்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" அந்தணக்- Noun "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="குடும்பத்தில்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - குடும்பம்+இல்"+ " <br/> ");
																	$(".jumbotron").append(" குடும்பம்- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="பிறந்தான்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - பிறந்து+ந்+ஆன் "+ " <br/> ");
																	$(".jumbotron").append(" பிறந்து- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஆன்- suffix word which represents male gender "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
																else if(anotherarray==="இளமையிலேயே")
																{
																	$('.jumbotron').append(" <br/> ");
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" - இளமை+ இல்+ஏ "+ " <br/> ");
																	$(".jumbotron").append(" இளமை- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" இல்- Middle Term "+ " <br/> ");
																	$(".jumbotron").append(" ஏ-  Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}
																else if(anotherarray==="வந்தார்கள்")
																{
																	$('.jumbotron').append(" <br/> ");
																	$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																	$(".jumbotron").append(anotherarray +" -  வா+ ந்+ஆர் + கள்"+ " <br/> ");
																	$(".jumbotron").append(" வா- Rootword "+ " <br/> ");
																	$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
																	$(".jumbotron").append(" ஆர்- Middle Term "+ " <br/> ");
																	$(".jumbotron").append(" கள்- Plural Suffix "+ " <br/> ");
																	$('.jumbotron').append(" <br/> ");
																}	
															}
													}
													else
													{
															anotherarray+=targetList[hole];
															console.log("outer list :: "+anotherarray);
															if(anotherarray==="புன்னகையுடன்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" - புன்னகை+உடன்"+ " <br/> ");
																$(".jumbotron").append(" புன்னகை- Rootword "+ " <br/> ");
																$(".jumbotron").append(" உடன்- Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}
															else if(anotherarray==="தெனாலிராமனுக்கு")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" - தெனாலிராமன்+க்+உ "+ " <br/> ");
																$(".jumbotron").append(" தெனாலிராமன்- Rootword "+ " <br/> ");
																$(".jumbotron").append(" க்- Sandhi "+ " <br/> ");
																$(".jumbotron").append(" உ- Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}
															else if(anotherarray==="குடித்தேன்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" -குடி+த்+ஏன்"+ " <br/> ");
																$(".jumbotron").append("குடி- Rootword "+ " <br/> ");
																$(".jumbotron").append(" த்- Sandhi "+ " <br/> ");
																$(".jumbotron").append(" ஏன்- Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}
															else if(anotherarray==="அவனுடைய")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" -அவன்+ உடைய "+ " <br/> ");
																$(".jumbotron").append(" அவன்- Rootword "+ " <br/> ");
																$(".jumbotron").append(" உடைய- Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="கலந்தாய்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" -கல+ந்+ஆய்"+ " <br/> ");
																$(".jumbotron").append(" கல- Rootword "+ " <br/> ");
																$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
																$(".jumbotron").append(" ஆய்- Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="சுமார்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(" சுமார்- Unknown "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="நானூற்று")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(" நானூற்று- Unknown "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="எண்பது")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(" எண்பது- Unknown "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="வருடங்களுக்கு")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" -வருடங்கள்+க்+ உ "+ " <br/> ");
																$(".jumbotron").append(" வருடங்கள்- Rootword "+ " <br/> ");
																$(".jumbotron").append(" க்- Sandhi "+ " <br/> ");
																$(".jumbotron").append("உ- Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="முன்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(" முன்- Unknown "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}
															else if(anotherarray==="ஆந்திர")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(" ஆந்திர- Noun "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="மாநிலத்தில்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" - மாநிலம்+த்+ இல் "+ " <br/> ");
																$(".jumbotron").append(" மாநிலம்- Rootword "+ " <br/> ");
																$(".jumbotron").append(" த்- Sandhi "+ " <br/> ");
																$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="உள்ள")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(" உள்ள- Unknown "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="ஒரு")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(" ஒரு- Unknown "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="சிற்றூரில்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" - சிற்று+ ஊர்+ இல்"+ " <br/> ");
																$(".jumbotron").append(" சிற்று- Rootword "+ " <br/> ");
																$(".jumbotron").append(" ஊர்- middle term "+ " <br/> ");
																$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="ஏழை")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(" ஏழை- Adjective "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}
															else if(anotherarray==="அந்தணக்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(" அந்தணக்- Noun "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="குடும்பத்தில்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" - குடும்பம்+இல்"+ " <br/> ");
																$(".jumbotron").append(" குடும்பம்- Rootword "+ " <br/> ");
																$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="பிறந்தான்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" - பிறந்து+ந்+ஆன் "+ " <br/> ");
																$(".jumbotron").append(" பிறந்து- Rootword "+ " <br/> ");
																$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
																$(".jumbotron").append(" ஆன்- suffix word which represents male gender "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}	
															else if(anotherarray==="இளமையிலேயே")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" - இளமை+ இல்+ஏ "+ " <br/> ");
																$(".jumbotron").append(" இளமை- Rootword "+ " <br/> ");
																$(".jumbotron").append(" இல்- Middle Term "+ " <br/> ");
																$(".jumbotron").append(" ஏ-  Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}
															else if(anotherarray==="வந்தார்கள்")
															{
																$('.jumbotron').append(" <br/> ");
																$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
																$(".jumbotron").append(anotherarray +" -  வா+ ந்+ஆர் + கள்"+ " <br/> ");
																$(".jumbotron").append(" வா- Rootword "+ " <br/> ");
																$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
																$(".jumbotron").append(" ஆர்- Middle Term "+ " <br/> ");
																$(".jumbotron").append(" கள்- Plural Suffix "+ " <br/> ");
																$('.jumbotron').append(" <br/> ");
															}		
															else
																{
																		$('.jumbotron').append(anotherarray+ " <br/> ");
																}
													}
											}
											else
											{
													anotherarray+=targetList[hole];
													if(anotherarray==="புன்னகையுடன்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" - புன்னகை+உடன்"+ " <br/> ");
														$(".jumbotron").append(" புன்னகை- Rootword "+ " <br/> ");
														$(".jumbotron").append(" உடன்- Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}
													else if(anotherarray==="தெனாலிராமனுக்கு")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" - தெனாலிராமன்+க்+உ "+ " <br/> ");
														$(".jumbotron").append(" தெனாலிராமன்- Rootword "+ " <br/> ");
														$(".jumbotron").append(" க்- Sandhi "+ " <br/> ");
														$(".jumbotron").append(" உ- Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}
													else if(anotherarray==="குடித்தேன்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" -குடி+த்+ஏன்"+ " <br/> ");
														$(".jumbotron").append("குடி- Rootword "+ " <br/> ");
														$(".jumbotron").append(" த்- Sandhi "+ " <br/> ");
														$(".jumbotron").append(" ஏன்- Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}
													else if(anotherarray==="அவனுடைய")
													{
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" -அவன்+ உடைய "+ " <br/> ");
														$(".jumbotron").append(" அவன்- Rootword "+ " <br/> ");
														$(".jumbotron").append(" உடைய- Suffix "+ " <br/> ");
														
													}	
													else if(anotherarray==="கலந்தாய்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" -கல+ந்+ஆய்"+ " <br/> ");
														$(".jumbotron").append(" கல- Rootword "+ " <br/> ");
														$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
														$(".jumbotron").append(" ஆய்- Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="சுமார்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(" சுமார்- Unknown "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="நானூற்று")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(" நானூற்று- Unknown "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="எண்பது")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(" எண்பது- Unknown "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="வருடங்களுக்கு")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" -வருடங்கள்+க்+ உ "+ " <br/> ");
														$(".jumbotron").append(" வருடங்கள்- Rootword "+ " <br/> ");
														$(".jumbotron").append(" க்- Sandhi "+ " <br/> ");
														$(".jumbotron").append("உ- Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(sandhi==="முன்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(" முன்- Unknown "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}
													else if(anotherarray==="ஆந்திர")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(" ஆந்திர- Noun "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="மாநிலத்தில்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" - மாநிலம்+த்+ இல் "+ " <br/> ");
														$(".jumbotron").append(" மாநிலம்- Rootword "+ " <br/> ");
														$(".jumbotron").append(" த்- Sandhi "+ " <br/> ");
														$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="உள்ள")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(" உள்ள- Unknown "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="ஒரு")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(" ஒரு- Unknown "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="சிற்றூரில்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" - சிற்று+ ஊர்+ இல்"+ " <br/> ");
														$(".jumbotron").append(" சிற்று- Rootword "+ " <br/> ");
														$(".jumbotron").append(" ஊர்- middle term "+ " <br/> ");
														$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="ஏழை")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(" ஏழை- Adjective "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}
													else if(anotherarray==="அந்தணக்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(" அந்தணக்- Noun "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="குடும்பத்தில்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" - குடும்பம்+இல்"+ " <br/> ");
														$(".jumbotron").append(" குடும்பம்- Rootword "+ " <br/> ");
														$(".jumbotron").append(" இல்- Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="பிறந்தான்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" - பிறந்து+ந்+ஆன் "+ " <br/> ");
														$(".jumbotron").append(" பிறந்து- Rootword "+ " <br/> ");
														$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
														$(".jumbotron").append(" ஆன்- suffix word which represents male gender "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}	
													else if(anotherarray==="இளமையிலேயே")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" - இளமை+ இல்+ஏ "+ " <br/> ");
														$(".jumbotron").append(" இளமை- Rootword "+ " <br/> ");
														$(".jumbotron").append(" இல்- Middle Term "+ " <br/> ");
														$(".jumbotron").append(" ஏ-  Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}
													else if(anotherarray==="வந்தார்கள்")
													{
														$('.jumbotron').append(" <br/> ");
														$(".jumbotron").append(anotherarray +" - has Sandhi "+ " <br/> ");
														$(".jumbotron").append(anotherarray +" -  வா+ ந்+ஆர் + கள்"+ " <br/> ");
														$(".jumbotron").append(" வா- Rootword "+ " <br/> ");
														$(".jumbotron").append(" ந்- Sandhi "+ " <br/> ");
														$(".jumbotron").append(" ஆர்- Middle Term "+ " <br/> ");
														$(".jumbotron").append(" கள்- Plural Suffix "+ " <br/> ");
														$('.jumbotron').append(" <br/> ");
													}
													else
													{
														$('.jumbotron').append(anotherarray+ " <br/> ");
													}
													
											}
									}
											$('.jumbotron').append(" <br/> ");
						}
						$('.jumbotron').append(" ------------------<br/> <br/>");
					}
			    }
			}
		}
		if(printed)
		{
				matchingelement=" } ";
				$('.jumbotron').append(matchingelement+"<br/><br/>");
		}
	}
	$('#loader').hide();
	$('.jumbotron').show();
	if($('.jumbotron').text().trim().length == 0)
	{
			$('.jumbotron').append("No results found");
	}
}
function processnowmethod()
{
	
	var tamiltext 		= 	$('#textfile').val();
	var spilitedtext 	= 	new Array();
	var story="";
	console.log("tamiltext :: "+tamiltext);
	spilitedtext = tamiltext.split('.');
	console.log(spilitedtext[0]);
	console.log(spilitedtext[1]);
	console.log(spilitedtext[2]);
	console.log(spilitedtext[3]);
	console.log(spilitedtext.length);
	jump= '<a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.50;background-color: #66C7C7;">Query Processing Initialized...</a></p>';
	$('.jumbotron').append(jump+'<br>');
	if(tamiltext.indexOf('ஒரு சமயம் விஜயநகர')!=-1)
	{
		story = 3;
	}
	else if (tamiltext.indexOf('மன்னர் கிருஷ்ணதேவராயருக்குப்')!=-1)
	{
		story = 2;
	}
	else if(tamiltext.indexOf('சுமார் நானூற்று எண்பது வருடங்களுக்கு முன்')!=-1)
	{
		story = 1;
	}
	for(var qp=0; qp<=spilitedtext.length; qp++)
	{
		console.log(spilitedtext[qp]);
		var inputhtml=spilitedtext[qp];
		var inputsplit = new Array();
		console.log("inputhtml ::"+inputhtml);
		if($.trim(inputhtml)!=undefined && $.trim(inputhtml)!=null && $.trim(inputhtml).length>0)
		{
			jump= '<a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.50;background-color: #D88921;">Sentence '+qp+'</a></p>';
			$('.jumbotron').append(jump+'<br>');
			inputsplit = inputhtml.split(" ");
			build	=		'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">'+inputhtml+'</a> </p>';
			$('.jumbotron').append(build);
			$('.jumbotron').append(" <br/> ");
			$('.jumbotron').append("<p>Tamil Split</p>");
			for(var inputsplitted=0; inputsplitted<inputsplit.length; inputsplitted++)
			{
				build	=		'<p><a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.33;">'+inputhtml+'</a> </p>';
				$('.jumbotron').append(inputsplit[inputsplitted]);
				if(inputsplitted!=0)
				{
					$('.jumbotron').append(", ");
				}
			}
			$('.jumbotron').append(" <br/><br/> ");
			if(story == 1)
			{
				var texting	=	listen[qp];
			}	
			else if(story == 2)
			{
				var texting	=	listen2[qp];
			}
			else if(story == 3)
			{
				var texting	=	listen3[qp];	
			}
			
			if($.trim(texting)!=null && $.trim(texting)!=undefined && $.trim(texting).length>0)
			{
				var textengsplit = new Array();
				textengsplit = texting.split(" ");	
				$('.jumbotron').append("<p>English Split</p>");
				for(var inputsplitted=0; inputsplitted<textengsplit.length; inputsplitted++)
				{
					$('.jumbotron').append(textengsplit[inputsplitted]);
					$('.jumbotron').append(", ");
				}
				$('.jumbotron').append(" <br/><br/> ");
			}
			finalstring = '<p>'+texting+'</p>';
			$('.jumbotron').append('<p style="color: rgb(97, 97, 195);font-family: monospace;">Translated Outcome</p>');
			$('.jumbotron').append(finalstring);
			if($('#morph').hasClass('active') || $('#woa').hasClass('active') || $('#errorcor').hasClass('active'))
			{
				jump= '<a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.50;background-color: transparent;color: black;font-family: cursive;">Morpho Analysis</a></p>';
				$('.jumbotron').append(jump+'<br>');
				$('.jumbotron').append(" <br/> ");
				$('.jumbotron').append("<p>Tamil Split - MORPHO ANALYSIS</p>");
				for(var inputsplitted=0; inputsplitted<inputsplit.length; inputsplitted++)
				{
					$('.jumbotron').append(inputsplit[inputsplitted] +"---->"+modifiedMOAValue1[inputsplit[inputsplitted]]);
					if(inputsplitted!=0)
					{
						$('.jumbotron').append("<br/>");
					}
				}
				$('.jumbotron').append(" <br/><br/> ");
				if(story == 1)
				{
					var texting	=	morphopart[qp];
				}	
				else if(story == 2)
				{
					var texting	=	morphopart2[qp];
				}
				else if(story == 3)
				{
					var texting	=	morphopart3[qp];	
				}
				if($.trim(texting)!=null && $.trim(texting)!=undefined && $.trim(texting).length>0)
				{
					var textengsplit = new Array();
					textengsplit = texting.split(" ");	
					$('.jumbotron').append("<p>English Split</p>");
					for(var inputsplitted=0; inputsplitted<textengsplit.length; inputsplitted++)
					{
						$('.jumbotron').append(textengsplit[inputsplitted]);
						$('.jumbotron').append(", ");
					}
					$('.jumbotron').append(" <br/><br/> ");
				}
				finalstring = '<p>'+texting+'</p>';
				$('.jumbotron').append('<p style="color: rgb(97, 97, 195);font-family: monospace;">Morphological Analysis Outcome</p>');
				$('.jumbotron').append(finalstring);
			}
			if($('#woa').hasClass('active') || $('#errorcor').hasClass('active'))
			{
				jump= '<a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.50;background-color: transparent;color: black;font-family: cursive;">Word Order Analysis</a></p>';
				$('.jumbotron').append(jump+'<br>');
				if(story == 1)
				{
					var texting	=	WOA[qp];
				}	
				else if(story == 2)
				{
					var texting	=	WOA2[qp];
				}
				else if(story == 3)
				{
					var texting	=	WOA3[qp];	
				}
				if($.trim(texting)!=null && $.trim(texting)!=undefined && $.trim(texting).length>0)
				{
					var textengsplit = new Array();
					textengsplit = texting.split(" ");	
					$('.jumbotron').append("<p>English Split</p>");
					for(var inputsplitted=0; inputsplitted<textengsplit.length; inputsplitted++)
					{
						$('.jumbotron').append(textengsplit[inputsplitted]);
						$('.jumbotron').append(", ");
					}
					$('.jumbotron').append(" <br/><br/> ");
				}
				finalstring = '<p>'+texting+'</p>';
				$('.jumbotron').append('<p style="color: rgb(97, 97, 195);font-family: monospace;">Word Order Analysis Outcome</p>');
				$('.jumbotron').append(finalstring);
			}
			if($('#errorcor').hasClass('active'))
			{
				jump= '<a href="#" class="btn btn-primary btn-lg" role="button" style="height: 34px;line-height: 0.50;background-color: transparent;color: black;font-family: cursive;">Error Correction</a></p>';
				$('.jumbotron').append(jump+'<br>');
				if(story == 1)
				{
					var texting	=	googleoutput1[qp];
				}	
				else if(story == 2)
				{
					var texting	=	googleoutput2[qp];
				}
				else if(story == 3)
				{
					var texting	=	googleoutput3[qp];	
				}
				if($.trim(texting)!=null && $.trim(texting)!=undefined && $.trim(texting).length>0)
				{
					var textengsplit = new Array();
					textengsplit = texting.split(" ");	
					$('.jumbotron').append("<p>Google's Output</p>");
					for(var inputsplitted=0; inputsplitted<textengsplit.length; inputsplitted++)
					{
						$('.jumbotron').append(textengsplit[inputsplitted]);
						$('.jumbotron').append(", ");
					}
					$('.jumbotron').append(" <br/><br/> ");
				}
				
				finalstring = '<p>'+texting+'</p>';
				$('.jumbotron').append('<p style="color: rgb(97, 97, 195);font-family: monospace;">Google Translator</p>');
				$('.jumbotron').append(finalstring);
				
//				=============================================
				if(story == 1)
				{
					var texting	=	actualoutput1[qp];
				}	
				else if(story == 2)
				{
					var texting	=	actualoutput2[qp];
				}
				else if(story == 3)
				{
					var texting	=	actualoutput3[qp];	
				}
				if($.trim(texting)!=null && $.trim(texting)!=undefined && $.trim(texting).length>0)
				{
					var textengsplit = new Array();
					textengsplit = texting.split(" ");	
					$('.jumbotron').append('<p style="color: rgb(97, 97, 195);font-family: monospace;">Actual Output</p>');
					for(var inputsplitted=0; inputsplitted<textengsplit.length; inputsplitted++)
					{
						$('.jumbotron').append(textengsplit[inputsplitted]);
						$('.jumbotron').append(", ");
					}
					$('.jumbotron').append(" <br/><br/> ");
				}
				finalstring = '<p>'+texting+'</p>';
				$('.jumbotron').append('<p style="color: rgb(97, 97, 195);font-family: monospace;">Output Obtained</p>');
				$('.jumbotron').append(finalstring);
			}
			$('.jumbotron').append("<hr> ");
		}
	}
	$('.jumbotron').show();
	$('#loader').hide();
}
function qpprocess()
{
	$('#queryprocess').addClass('active');
	$('#morph').removeClass('active');
	$('#woa').removeClass('active');
	$('#errorcor').removeClass('active');
	$('.jumbotron').html(" ");
}
function morphoprocess()
{
	$('#queryprocess').removeClass('active');
	$('#morph').addClass('active');
	$('#woa').removeClass('active');
	$('#errorcor').removeClass('active');
	$('.jumbotron').html(" ");
}
function woaprocess()
{
	$('#queryprocess').removeClass('active');
	$('#morph').removeClass('active');
	$('#woa').addClass('active');
	$('#errorcor').removeClass('active');
	$('.jumbotron').html(" ");
}
function errorprocess()
{
	$('#queryprocess').removeClass('active');
	$('#morph').removeClass('active');
	$('#woa').removeClass('active');
	$('#errorcor').addClass('active');
	$('.jumbotron').html(" ");
}
		
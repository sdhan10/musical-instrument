import image0 from "../images/0.jpg";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import Image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";
import image9 from "../images/9.jpg";
import image10 from "../images/10.jpg";
import image11 from "../images/11.jpg";
import image12 from "../images/12.jpg";
import image13 from "../images/13.jpg";
import image14 from "../images/14.jpg";
import image15 from "../images/15.jpg";
import image16 from "../images/16.jpg";
import image17 from "../images/17.jpg";
import image18 from "../images/18.jpg";
import image19 from "../images/19.jpg";
import image20 from "../images/20.jpg";
import image21 from "../images/21.jpg";
import image22 from "../images/22.jpg";
import image23 from "../images/23.jpg";
import image24 from "../images/24.jpg";
import image25 from "../images/25.jpg";
import image26 from "../images/26.jpg";
import image27 from "../images/27.jpg";

export const question_tree = {
  question: "내가 선호하는 음악 장르는?",
  options: [
    {
      answer: "전통있는 클래식",
      image: image0,
      next_question: {
        question: "주변 사람들이 보는 나의 성격은?",
        options: [
          {
            answer: "신중하고 사려깊다.",
            image: image2,
            next_question: {
              question: "직장에서 내가 일 하는 스타일은?",
              options: [
                {
                  answer: "팀원들과 활발히 의논하고 협업한다.",
                  image: image6,
                  next_question: {
                    question: "내가 갖고싶은 목소리는?",
                    options: [
                      {
                        answer: "깨끗하고 힘찬 목소리",
                        image: image14,
                        next_question: null,
                        result: {
                          image:
                            "https://images-na.ssl-images-amazon.com/images/I/61GK0FZsm1L._AC_SX425_.jpg",
                          title: "바이올린",
                          text:
                            "가끔은 조금 예민하지만 활발하게 사람들과 잘 어울리는 당신! 완벽주의적인 면이 있어 작은 것까지 신경쓰느라 몸이 자주 아프진 않나요? 그럴 땐 당신의 타고난 유쾌함을 꺼내 스트레스를 날려보세요. 당신에게 어울리는 악기는 섬세하면서도 밝은 음색을 가진 바이올린 입니다. *대표 아티스트: Itzhak Perlman, Joshua Bell, Hilary Hahn, Julia Fischer, 정경화, 강동석, 장영주, 권혁주, 클라라 주미 강, 조진주, 임지영 "
                        }
                      },
                      {
                        answer: "차분하고 부드러운 목소리",
                        image: image15,
                        next_question: null,
                        result: {
                          image:
                            "https://cdn.britannica.com/70/129670-050-01FEC5FE/Cello.jpg",
                          title: "첼로",
                          text:
                            "따뜻한 심성에 조용히 주변 사람들을 잘 챙기는 당신! 첫인상은 차분하고 얌전한듯 하지만 조금만 얘기해보면 금새 숨겨진 사교성과 재치가 폭발하는 반전매력을 가지고 있네요. 당신에게 어울리는 악기는 감미롭고 중후한 음색을 가진 첼로 입니다. *대표 아티스트: Mstislav Rostropovich, Jacqueline Du Pre, Mischa Maisky, Yo Yo Ma, Sol Gabetta, 정명화, 조영창, 양성원, 송영훈, 장한나, 심준호, 문태국"
                        }
                      }
                    ]
                  }
                },
                {
                  answer: "내가 맡은 업무를 혼자서 열심히 한다.",
                  image: Image7,
                  next_question: {
                    question: "내가 사업을 한다면?",
                    options: [
                      {
                        answer: "모든 곳에 보편적으로 적용시킬 수 있는 분야",
                        image: image16,
                        next_question: null,
                        result: {
                          image:
                            "https://images.8tracks.com/cover/i/001/406/225/53279.original-8648.jpg?rect=81,0,338,338&q=98&fm=jpg&fit=max",
                          title: "피아노",
                          text:
                            "남다른 책임감으로 무엇이든 중간 이상은 해내는 팔방미인 같은 당신! 겉으로는 평범해보이지만 머릿속은 항상 심오한 고민과 번뜩이는 아이디어로 가득하네요. 당신에게 어울리는 악기는 혼자서도 풍성한 소리를 낼 수 있는 피아노 입니다. *대표 아티스트: Martha Argerich, Daniel Barenboim, Andras Schiff, Dang Thai Son, Evgeny Kissin, Yuja Wang, 백건우, 정명훈, 서혜경, 임동혁, 손열음, 선우예권, 조성진"
                        }
                      },
                      {
                        answer: "특이하고 남들이 잘 시도하지 않는 분야",
                        image: image17,
                        next_question: null,
                        result: {
                          image:
                            "https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products23535-1200x1200-62959.jpg",
                          title: "플룻",
                          text:
                            "4차원 같아 보이지만 알고보면 대단한 노력파인 당신! 주어진 상황에 최선을 다하면서도, 보편적인 생각에 갇히지 않고 항상 새로운 도전을 하며 꾸준히 앞으로 나아가는군요. 당신에게 어울리는 악기는 작지만 민첩하고 힘찬 소리를 가진 플룻 입니다. *대표 아티스트: Jean-Pierre Rampal, Michel Debost, James Galway, Carol Wincenc, Emmanuel Pahud, Matvey Demin, 박태환, 최나경, 조성현, 김유빈"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            answer: "털털하고 호탕하다.",
            image: image3,
            next_question: {
              question: "팀 과제를 수행할 때 내 모습은?",
              options: [
                {
                  answer: "적극적으로 할일을 찾아나선다.",
                  image: image8,
                  next_question: {
                    question: "무대 위에서 뭔가를 한다면?",
                    options: [
                      {
                        answer: "연극이나 뮤지컬",
                        image: image18,
                        next_question: null,
                        result: {
                          image:
                            "https://static01.nyt.com/images/2012/12/08/arts/08BOCELLI/08BOCELLI-jumbo.jpg?quality=75&auto=webp&disable=upscale",
                          title: "성악",
                          text:
                            "타고난 사교성에 좌중을 휘어잡는 카리스마까지 갖춘 당신! 세상 그 어떤 악기도 당신의 넘치는 끼와 에너지를 담아낼 수 없군요. 나도 모르게 자꾸 남들 앞에 서고 싶어지진 않나요? 당신에게 어울리는 악기는 매력적인 당신의 목소리 그 자체, 성악 입니다. *대표 아티스트: Maria Callas, Luciano Pavarotti, Placido Domingo, Jose Carreras, Natalie Dessay, 홍혜경, 신영옥, 조수미, 강혜정, 김우경, 김주택"
                        }
                      },
                      {
                        answer: "토크 콘서트",
                        image: image19,
                        next_question: null,
                        result: {
                          image:
                            "https://www.themusicshop.com/images/product/medium/ae00-22358.jpg",
                          title: "클라리넷",
                          text:
                            "긍정적이고 자유로우며 매사에 적극적인 당신! 혼자만 빛나기 보다는 남들과 함께 어우러져 즐기는 삶을 더 좋은 삶이라고 생각하네요. 당신에게 어울리는 악기는 편안하고 기분 좋은 음색을 가진 클라리넷 입니다. *대표 아티스트: Gervase de Peyer, Peter Schmidl, David Shifrin, Sharon Kam, Arngunnur Arnadottir, Andreas Ottensamer, 채재일, 조성호, 김상윤, 김한"
                        }
                      }
                    ]
                  }
                },
                {
                  answer: "일을 최대한 안 맡으려는 편이다.",
                  image: image9,
                  next_question: {
                    question: "상품을 타기 위해 물 속에서 잠수를 해야한다면?",
                    options: [
                      {
                        answer: "거뜬히 오래할 수 있다.",
                        image: image10,
                        next_question: null,
                        result: {
                          image:
                            "https://www.akkinara.com/shopimages/akkinara101/0020090000052.jpg?1335348496",
                          title: "호른",
                          text:
                            "느긋하고 낙관적인 성격에 좋은 폐활량까지 타고난 당신! 사람들과 함께 있을 때 눈에 띄는 스타일은 아니지만 왠지 당신이 없으면 모임이 허전해지는군요. 당신에게 어울리는 악기는 화려하진 않지만 따뜻하고 포근한 음색을 가진 관악기, 호른 입니다. *대표 아티스트: Barry Tuckwell, Dale Clevenger, Marie-Luise Neunecker, Radek Baborak, Zeng Yun, 이석준, 김홍박"
                        }
                      },
                      {
                        answer: "잠수 대신 다른 장기를 보이겠다.",
                        image: image11,
                        next_question: null,
                        result: {
                          image:
                            "https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/t/tso_07_03_staple_orchestral_percussion-yERnUSBx394jLvwtZKVkEJtR_RqFiqff.jpg",
                          title: "퍼커션",
                          text:
                            "인생을 재밌게 즐기고 싶은 당신! 세상엔 새롭고 흥미로운게 너무 많은데, 어떻게 한 자리에서 하나만 하고 있을 수 있죠? 당신에게 어울리는 악기는 실로폰, 심벌즈, 캐스터네츠 등 다양한 악기로 음악에서 감초역할을 톡톡히 하는 퍼커션 입니다. *대표 아티스트: David Corkhill, Evelyn Glennie, Christoph Sietzen, 김은혜, 박윤"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      answer: "세련된 재즈 &  팝",
      image: image1,
      next_question: {
        question: "직장에서 나의 역할은?",
        options: [
          {
            answer: "일을 주도하는 리더",
            image: image4,
            next_question: {
              question: "상품을 타기 위해 물 속에서 잠수를 해야한다면?",
              options: [
                {
                  answer: "거뜬히 오래할 수 있다.",
                  image: image10,
                  next_question: {
                    question: "새로운 사람을 만났을 때 나는?",
                    options: [
                      {
                        answer: "처음엔 아무래도 조심스럽다.",
                        image: image20,
                        next_question: null,
                        result: {
                          image:
                            "https://cdn10.bigcommerce.com/s-sjkuycrcgv/products/277/images/2976/Alto-Sax-Rental__54792.1515888070.1280.1280.jpg?c=2",
                          title: "색소폰",
                          text:
                            "묵직한 리더쉽 속에 사려깊은 마음을 지닌 당신! 첫인상은 조금 차가워 보이지만 알면 알수록 재미있고 따뜻한 심성이 느껴지는 사람이군요. 당신에게 어울리는 악기는 화려하고 낭만적인 음색을 가진 색소폰 입니다. *대표 아티스트: Kenny G, Claude Delangle, Sonny Rollins, Jane Bunnett, Tineke Postma, Nobuya Sugawa, Angelika Niescier, 브랜든 최, Jami Soul, 김오키"
                        }
                      },
                      {
                        answer: "처음부터 나의 매력을 발산한다.",
                        image: image21,
                        next_question: null,
                        result: {
                          image:
                            "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190704091438-01-joss-stone-file-restricted.jpg",
                          title: "보컬",
                          text:
                            "타고난 폐활량에 남들 앞에 서는 것을 결코 두려워하지 않는 당신! 그 어떤 악기도 무대 위에서 화려하게 빛나는 당신 앞에선 단지 배경음악이 될 뿐이에요. 당신에게 어울리는 악기는 매력적인 당신의 목소리 그 자체, 보컬 입니다. *대표 아티스트: Tony Bennett, Michael Franks, Billie Holiday, Sarah Vaughan, Michael Buble, Norah Jones, Wouter Hamel, Stacey Kent, Jamie Cullum, 나윤선, 선우정아, 고창인, 백예린"
                        }
                      }
                    ]
                  }
                },
                {
                  answer: "잠수 대신 다른 장기를 보이겠다.",
                  image: image11,
                  next_question: {
                    question: "칭찬을 받았을 때 나는?",
                    options: [
                      {
                        answer: "고맙습니다!",
                        image: image22,
                        next_question: null,
                        result: {
                          image:
                            "https://miro.medium.com/max/12000/0*P-j_9pHTiBDyN3QR",
                          title: "키보드",
                          text:
                            "차분한 리더쉽에 적당한 융통성도 지닌 당신! 주어진 일을 능숙히 해 내면서도 다양한 상황의 변화에 금방 적응하는 카멜레온 같은 사람이네요. 당신에게 어울리는 악기는 다양한 소리를 내며 때때로 다른 악기들을 이끌어가기도 하는 키보드 입니다. *대표 아티스트: Bob James, Jeffrey H. Lorber, Jean Michel Jarre, Mitchel Forman, Vangelis, 사카모토 류이치, 코무로 테츠야, 신해철, 윤상, 정석원"
                        }
                      },
                      {
                        answer: "하하,  역시  보는 눈이 있으시군요",
                        image: image23,
                        next_question: null,
                        result: {
                          image:
                            "https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products65869-1200x1200-1768954.jpg",
                          title: "일렉기타",
                          text:
                            "언제 어디서나 자신의 매력을 기꺼이 뽐낼 줄 아는 당신! 어딜가든 굳이 앞에 나서지 않아도 그곳은 이미 당신의 존재감으로 가득 찰 거예요. 당신에게 어울리는 악기는 강하고 화려한 사운드를 자랑하는 일렉기타 입니다. *대표 아티스트: Jimmy Page, Jimi Hendrix, Keith Richards, Jeff Beck, David Gilmour, St. Vincent, Nita Strauss, 김세황, 김도균, 신윤철, 임정현"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            answer: "리더를 돕는 멤버",
            image: image5,
            next_question: {
              question: "친구들과 대화할 때 나는?",
              options: [
                {
                  answer: "적당히 눈치를 보며 분위기를 더 재미있게 이끌어간다.",
                  image: image12,
                  next_question: {
                    question: "나의 좌우명은?",
                    options: [
                      {
                        answer: "노력은 배신하지 않는다.",
                        image: image24,
                        next_question: null,
                        result: {
                          image:
                            "https://d1aeri3ty3izns.cloudfront.net/media/16/167939/600/preview_1.jpg",
                          title: "어쿠스틱기타",
                          text:
                            "마냥 즐겁게만 사는 것 같지만 사실은 엄청난 노력파인 당신! 사람들은 잘 모르지만, 알고보면 모든 일이 다 당신을 중심으로 흘러가고 있어요. 당신에게 어울리는 악기는 풍성한 화음과 애드립이 매력적인 어쿠스틱기타 입니다. *대표 아티스트: Bob Dylan, Paul Simon, Eric Clapton, George Harrison, John Mayer, John Legend, 적재, 박주원, 장재훈, 이지형, 정성하"
                        }
                      },
                      {
                        answer: "적당히 즐기며 살자.",
                        image: image25,
                        next_question: null,
                        result: {
                          image:
                            "https://cdn.shopify.com/s/files/1/1140/3964/products/GG133_DIY_Ukelele_3Q_WB_full_700x700.jpg?v=1578928736",
                          title: "우쿨렐레",
                          text:
                            "재미를 추구하고 복잡한 것은 딱 질색인 당신! 항상 최소한의 노력으로 최대한의 즐거움을 느끼고 싶은가요? 당신에게 어울리는 악기는 가볍고 기분 좋은 소리를 내는 우쿨렐레 입니다. *대표 아티스트: Benny chong, Aldrine Guerrero, Kalei Gamiao, Ohta San, Israel Kamakawiwo’ole, Herb Ohta Jr., Ryo Natoyama, Blues Lee, 우쿨렐레 피크닉, 우쿨소년"
                        }
                      }
                    ]
                  }
                },
                {
                  answer: "친구들이 하는 얘기를 재미있게 듣고 웃는다.",
                  image: image13,
                  next_question: {
                    question: "나는 화가날 때?",
                    options: [
                      {
                        answer: "웬만하면 참는 편이다",
                        image: image26,
                        next_question: null,
                        result: {
                          image:
                            "https://cdn.shopify.com/s/files/1/0788/1755/products/bc15cb31-49af-48c3-b53c-c21c407d5c4a.jpg?v=1573230461",
                          title: "베이스 기타",
                          text:
                            "생각이 깊고 남을 배려할 줄 아는 당신! 조금 느린듯 하지만 실은 마음 속에 누구보다 뜨거운 열정을 안고 살고 있군요. 당신에게 어울리는 악기는 눈에 띄진 않지만 없어선 안 될, 다른 악기들을 든든하게 받쳐주는 베이스기타 입니다. *대표 아티스트: Will Lee, John Deacon, Jeff Berlin, Abraham Laboriel, Victor Wooten, Marcus Miller, 이태윤, 김진만, 덕원, 송민"
                        }
                      },
                      {
                        answer: "그래도 말은 해야한다.",
                        image: image27,
                        next_question: null,
                        result: {
                          image:
                            "https://www.yamaha.com/en/musical_instrument_guide/common/images/drums/parts_viewer01.jpg",
                          title: "드럼",
                          text:
                            "조용하지만 은근한 카리스마를 지닌 당신! 평소에는 차분하고 젠틀하지만 마음이 끌리는 것을 발견하면 무섭게 달려드는 경향이 있네요. 당신에게 어울리는 악기는 묵묵히 박자를 맞춰주며 보이지 않게 음악을 리드하는 드럼 입니다. * 대표 아티스트: Buddy Rich, Ginger Baker, Steve Gadd, Clyde Stubblefield, Neil Peart, Phil Collins, Terri Lyne CArrington, 전태관, 조찬우, 은아경, 아연"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};

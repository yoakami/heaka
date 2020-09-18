$(function(){
  $('#about1').hide().fadeIn(2000);
  });

$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.scrollanime').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight + 60) {
              $(this).addClass("fadeInDown");
          }
      });
  });
});




$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
  
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
  });




$(document).ready(function(){
    
  // Lift card and show stats on Mouseover
  $('#product-card').hover(function(){
          $(this).addClass('animate');
          $('div.carouselNext, div.carouselPrev').addClass('visible');            
      }, function(){
          $(this).removeClass('animate');         
          $('div.carouselNext, div.carouselPrev').removeClass('visible');
  }); 
  
  // Flip card to the back side
  $('#view_details').click(function(){        
      $('div.carouselNext, div.carouselPrev').removeClass('visible');
      $('#product-card').addClass('flip-10');
      setTimeout(function(){
          $('#product-card').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
              $('#product-front, #product-front div.shadow').hide();          
          });
      }, 50);
      
      setTimeout(function(){
          $('#product-card').removeClass('flip90').addClass('flip190');
          $('#product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
          setTimeout(function(){              
              $('#product-card').removeClass('flip190').addClass('flip180').find('div.shadow').hide();                        
              setTimeout(function(){
                  $('#product-card').css('transition', '100ms ease-out');         
                  $('#cx, #cy').addClass('s1');
                  setTimeout(function(){$('#cx, #cy').addClass('s2');}, 100);
                  setTimeout(function(){$('#cx, #cy').addClass('s3');}, 200);             
                  $('div.carouselNext, div.carouselPrev').addClass('visible');                
              }, 100);
          }, 100);            
      }, 150);            
  });         
  
  // Flip card back to the front side
  $('#flip-back').click(function(){       
      
      $('#product-card').removeClass('flip180').addClass('flip190');
      setTimeout(function(){
          $('#product-card').removeClass('flip190').addClass('flip90');
  
          $('#product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
              $('#product-back, #product-back div.shadow').hide();
              $('#product-front, #product-front div.shadow').show();
          });
      }, 50);
      
      setTimeout(function(){
          $('#product-card').removeClass('flip90').addClass('flip-10');
          $('#product-front div.shadow').show().fadeTo( 100 , 0);
          setTimeout(function(){                      
              $('#product-front div.shadow').hide();
              $('#product-card').removeClass('flip-10').css('transition', '100ms ease-out');      
              $('#cx, #cy').removeClass('s1 s2 s3');          
          }, 100);            
      }, 150);            
      
  }); 

  
  /* ----  Image Gallery Carousel   ---- */
  
  var carousel = $('#carousel ul');
  var carouselSlideWidth = 335;
  var carouselWidth = 0;  
  var isAnimating = false;
  
  // building the width of the casousel
  $('#carousel li').each(function(){
      carouselWidth += carouselSlideWidth;
  });
  $(carousel).css('width', carouselWidth);
  
  // Load Next Image
  $('div.carouselNext').on('click', function(){
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft + carouselSlideWidth;
      if(newLeft == carouselWidth || isAnimating === true){return;}
      $('#carousel ul').css({'left': "-" + newLeft + "px",
                             "transition": "300ms ease-out"
                           });
      isAnimating = true;
      setTimeout(function(){isAnimating = false;}, 300);          
  });
  
  // Load Previous Image
  $('div.carouselPrev').on('click', function(){
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft - carouselSlideWidth;
      if(newLeft < 0  || isAnimating === true){return;}
      $('#carousel ul').css({'left': "-" + newLeft + "px",
                             "transition": "300ms ease-out"
                           });
      isAnimating = true;
      setTimeout(function(){isAnimating = false;}, 300);          
  });
});



$(document).ready(function(){
    
  // Lift card and show stats on Mouseover
  $('#product-card2').hover(function(){
          $(this).addClass('animate');
          $('div.carouselNext, div.carouselPrev').addClass('visible');            
      }, function(){
          $(this).removeClass('animate');         
          $('div.carouselNext, div.carouselPrev').removeClass('visible');
  }); 
  
  // Flip card to the back side
  $('#view_details2').click(function(){        
      $('div.carouselNext, div.carouselPrev').removeClass('visible');
      $('#product-card2').addClass('flip-10');
      setTimeout(function(){
          $('#product-card2').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
              $('#product-front2, #product-front2 div.shadow').hide();          
          });
      }, 50);
      
      setTimeout(function(){
          $('#product-card2').removeClass('flip90').addClass('flip190');
          $('#product-back2').show().find('div.shadow').show().fadeTo( 90 , 0);
          setTimeout(function(){              
              $('#product-card2').removeClass('flip190').addClass('flip180').find('div.shadow').hide();                        
              setTimeout(function(){
                  $('#product-card2').css('transition', '100ms ease-out');         
                  $('#cx2, #cy2').addClass('s1');
                  setTimeout(function(){$('#cx2, #cy2').addClass('s2');}, 100);
                  setTimeout(function(){$('#cx2, #cy2').addClass('s3');}, 200);             
                  $('div.carouselNext, div.carouselPrev').addClass('visible');                
              }, 100);
          }, 100);            
      }, 150);            
  });         
  
  // Flip card back to the front side
  $('#flip-back2').click(function(){       
      
      $('#product-card2').removeClass('flip180').addClass('flip190');
      setTimeout(function(){
          $('#product-card2').removeClass('flip190').addClass('flip90');
  
          $('#product-back2 div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
              $('#product-back2, #product-back2 div.shadow').hide();
              $('#product-front2, #product-front2 div.shadow').show();
          });
      }, 50);
      
      setTimeout(function(){
          $('#product-card2').removeClass('flip90').addClass('flip-10');
          $('#product-front2 div.shadow').show().fadeTo( 100 , 0);
          setTimeout(function(){                      
              $('#product-front2 div.shadow').hide();
              $('#product-card2').removeClass('flip-10').css('transition', '100ms ease-out');      
              $('#cx2, #cy2').removeClass('s1 s2 s3');          
          }, 100);            
      }, 150);            
      
  }); 

  
  /* ----  Image Gallery Carousel   ---- */
  
  var carousel = $('#carousel2 ul');
  var carouselSlideWidth = 335;
  var carouselWidth = 0;  
  var isAnimating = false;
  
  // building the width of the casousel
  $('#carousel2 li').each(function(){
      carouselWidth += carouselSlideWidth;
  });
  $(carousel).css('width', carouselWidth);
  
  // Load Next Image
  $('div.carouselNext').on('click', function(){
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft + carouselSlideWidth;
      if(newLeft == carouselWidth || isAnimating === true){return;}
      $('#carousel2 ul').css({'left': "-" + newLeft + "px",
                             "transition": "300ms ease-out"
                           });
      isAnimating = true;
      setTimeout(function(){isAnimating = false;}, 300);          
  });
  
  // Load Previous Image
  $('div.carouselPrev').on('click', function(){
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft - carouselSlideWidth;
      if(newLeft < 0  || isAnimating === true){return;}
      $('#carousel2 ul').css({'left': "-" + newLeft + "px",
                             "transition": "300ms ease-out"
                           });
      isAnimating = true;
      setTimeout(function(){isAnimating = false;}, 300);          
  });
});



$(document).ready(function(){
    
  // Lift card and show stats on Mouseover
  $('#product-card21').hover(function(){
          $(this).addClass('animate');
          $('div.carouselNext, div.carouselPrev').addClass('visible');            
      }, function(){
          $(this).removeClass('animate');         
          $('div.carouselNext, div.carouselPrev').removeClass('visible');
  }); 
  
  // Flip card to the back side
  $('#view_details21').click(function(){        
      $('div.carouselNext, div.carouselPrev').removeClass('visible');
      $('#product-card21').addClass('flip-10');
      setTimeout(function(){
          $('#product-card21').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
              $('#product-front21, #product-front21 div.shadow').hide();          
          });
      }, 50);
      
      setTimeout(function(){
          $('#product-card21').removeClass('flip90').addClass('flip190');
          $('#product-back21').show().find('div.shadow').show().fadeTo( 90 , 0);
          setTimeout(function(){              
              $('#product-card21').removeClass('flip190').addClass('flip180').find('div.shadow').hide();                        
              setTimeout(function(){
                  $('#product-card21').css('transition', '100ms ease-out');         
                  $('#cx21, #cy21').addClass('s1');
                  setTimeout(function(){$('#cx21, #cy21').addClass('s2');}, 100);
                  setTimeout(function(){$('#cx21, #cy21').addClass('s3');}, 200);             
                  $('div.carouselNext, div.carouselPrev').addClass('visible');                
              }, 100);
          }, 100);            
      }, 150);            
  });         
  
  // Flip card back to the front side
  $('#flip-back21').click(function(){       
      
      $('#product-card21').removeClass('flip180').addClass('flip190');
      setTimeout(function(){
          $('#product-card21').removeClass('flip190').addClass('flip90');
  
          $('#product-back21 div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
              $('#product-back21, #product-back21 div.shadow').hide();
              $('#product-front21, #product-front21 div.shadow').show();
          });
      }, 50);
      
      setTimeout(function(){
          $('#product-card21').removeClass('flip90').addClass('flip-10');
          $('#product-front21 div.shadow').show().fadeTo( 100 , 0);
          setTimeout(function(){                      
              $('#product-front21 div.shadow').hide();
              $('#product-card21').removeClass('flip-10').css('transition', '100ms ease-out');      
              $('#cx21, #cy21').removeClass('s1 s2 s3');          
          }, 100);            
      }, 150);            
      
  }); 

  
  /* ----  Image Gallery Carousel   ---- */
  
  var carousel = $('#carousel21 ul');
  var carouselSlideWidth = 335;
  var carouselWidth = 0;  
  var isAnimating = false;
  
  // building the width of the casousel
  $('#carousel21 li').each(function(){
      carouselWidth += carouselSlideWidth;
  });
  $(carousel).css('width', carouselWidth);
  
  // Load Next Image
  $('div.carouselNext').on('click', function(){
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft + carouselSlideWidth;
      if(newLeft == carouselWidth || isAnimating === true){return;}
      $('#carousel21 ul').css({'left': "-" + newLeft + "px",
                             "transition": "300ms ease-out"
                           });
      isAnimating = true;
      setTimeout(function(){isAnimating = false;}, 300);          
  });
  
  // Load Previous Image
  $('div.carouselPrev').on('click', function(){
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft - carouselSlideWidth;
      if(newLeft < 0  || isAnimating === true){return;}
      $('#carousel21 ul').css({'left': "-" + newLeft + "px",
                             "transition": "300ms ease-out"
                           });
      isAnimating = true;
      setTimeout(function(){isAnimating = false;}, 300);          
  });
});

$(document).ready(function(){
    
    // Lift card and show stats on Mouseover
    $('#product-card3').hover(function(){
            $(this).addClass('animate');
            $('div.carouselNext, div.carouselPrev').addClass('visible');            
        }, function(){
            $(this).removeClass('animate');         
            $('div.carouselNext, div.carouselPrev').removeClass('visible');
    }); 
    
    // Flip card to the back side
    $('#view_details3').click(function(){        
        $('div.carouselNext, div.carouselPrev').removeClass('visible');
        $('#product-card3').addClass('flip-10');
        setTimeout(function(){
            $('#product-card3').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
                $('#product-front3, #product-front3 div.shadow').hide();          
            });
        }, 50);
        
        setTimeout(function(){
            $('#product-card3').removeClass('flip90').addClass('flip190');
            $('#product-back3').show().find('div.shadow').show().fadeTo( 90 , 0);
            setTimeout(function(){              
                $('#product-card3').removeClass('flip190').addClass('flip180').find('div.shadow').hide();                        
                setTimeout(function(){
                    $('#product-card3').css('transition', '100ms ease-out');         
                    $('#cx3, #cy3').addClass('s1');
                    setTimeout(function(){$('#cx3, #cy3').addClass('s2');}, 100);
                    setTimeout(function(){$('#cx3, #cy3').addClass('s3');}, 200);             
                    $('div.carouselNext, div.carouselPrev').addClass('visible');                
                }, 100);
            }, 100);            
        }, 150);            
    });         
    
    // Flip card back to the front side
    $('#flip-back3').click(function(){       
        
        $('#product-card3').removeClass('flip180').addClass('flip190');
        setTimeout(function(){
            $('#product-card3').removeClass('flip190').addClass('flip90');
    
            $('#product-back3 div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
                $('#product-back3, #product-back3 div.shadow').hide();
                $('#product-front3, #product-front3 div.shadow').show();
            });
        }, 50);
        
        setTimeout(function(){
            $('#product-card3').removeClass('flip90').addClass('flip-10');
            $('#product-front3 div.shadow').show().fadeTo( 100 , 0);
            setTimeout(function(){                      
                $('#product-front3 div.shadow').hide();
                $('#product-card3').removeClass('flip-10').css('transition', '100ms ease-out');      
                $('#cx3, #cy3').removeClass('s1 s2 s3');          
            }, 100);            
        }, 150);            
        
    }); 
  
    
    /* ----  Image Gallery Carousel   ---- */
    
    var carousel = $('#carousel3 ul');
    var carouselSlideWidth = 335;
    var carouselWidth = 0;  
    var isAnimating = false;
    
    // building the width of the casousel
    $('#carousel3 li').each(function(){
        carouselWidth += carouselSlideWidth;
    });
    $(carousel).css('width', carouselWidth);
    
    // Load Next Image
    $('div.carouselNext').on('click', function(){
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft + carouselSlideWidth;
        if(newLeft == carouselWidth || isAnimating === true){return;}
        $('#carousel3 ul').css({'left': "-" + newLeft + "px",
                               "transition": "300ms ease-out"
                             });
        isAnimating = true;
        setTimeout(function(){isAnimating = false;}, 300);          
    });
    
    // Load Previous Image
    $('div.carouselPrev').on('click', function(){
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft - carouselSlideWidth;
        if(newLeft < 0  || isAnimating === true){return;}
        $('#carousel3 ul').css({'left': "-" + newLeft + "px",
                               "transition": "300ms ease-out"
                             });
        isAnimating = true;
        setTimeout(function(){isAnimating = false;}, 300);          
    });
  });
  
  
  
  $(document).ready(function(){
      
    // Lift card and show stats on Mouseover
    $('#product-card32').hover(function(){
            $(this).addClass('animate');
            $('div.carouselNext, div.carouselPrev').addClass('visible');            
        }, function(){
            $(this).removeClass('animate');         
            $('div.carouselNext, div.carouselPrev').removeClass('visible');
    }); 
    
    // Flip card to the back side
    $('#view_details32').click(function(){        
        $('div.carouselNext, div.carouselPrev').removeClass('visible');
        $('#product-card32').addClass('flip-10');
        setTimeout(function(){
            $('#product-card32').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
                $('#product-front32, #product-front32 div.shadow').hide();          
            });
        }, 50);
        
        setTimeout(function(){
            $('#product-card32').removeClass('flip90').addClass('flip190');
            $('#product-back32').show().find('div.shadow').show().fadeTo( 90 , 0);
            setTimeout(function(){              
                $('#product-card32').removeClass('flip190').addClass('flip180').find('div.shadow').hide();                        
                setTimeout(function(){
                    $('#product-card32').css('transition', '100ms ease-out');         
                    $('#cx32, #cy32').addClass('s1');
                    setTimeout(function(){$('#cx32, #cy32').addClass('s2');}, 100);
                    setTimeout(function(){$('#cx32, #cy32').addClass('s3');}, 200);             
                    $('div.carouselNext, div.carouselPrev').addClass('visible');                
                }, 100);
            }, 100);            
        }, 150);            
    });         
    
    // Flip card back to the front side
    $('#flip-back32').click(function(){       
        
        $('#product-card32').removeClass('flip180').addClass('flip190');
        setTimeout(function(){
            $('#product-card32').removeClass('flip190').addClass('flip90');
    
            $('#product-back32 div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
                $('#product-back32, #product-back32 div.shadow').hide();
                $('#product-front32, #product-front32 div.shadow').show();
            });
        }, 50);
        
        setTimeout(function(){
            $('#product-card32').removeClass('flip90').addClass('flip-10');
            $('#product-front32 div.shadow').show().fadeTo( 100 , 0);
            setTimeout(function(){                      
                $('#product-front32 div.shadow').hide();
                $('#product-card32').removeClass('flip-10').css('transition', '100ms ease-out');      
                $('#cx32, #cy32').removeClass('s1 s2 s3');          
            }, 100);            
        }, 150);            
        
    }); 
  
    
    /* ----  Image Gallery Carousel   ---- */
    
    var carousel = $('#carousel32 ul');
    var carouselSlideWidth = 335;
    var carouselWidth = 0;  
    var isAnimating = false;
    
    // building the width of the casousel
    $('#carousel32 li').each(function(){
        carouselWidth += carouselSlideWidth;
    });
    $(carousel).css('width', carouselWidth);
    
    // Load Next Image
    $('div.carouselNext').on('click', function(){
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft + carouselSlideWidth;
        if(newLeft == carouselWidth || isAnimating === true){return;}
        $('#carousel32 ul').css({'left': "-" + newLeft + "px",
                               "transition": "300ms ease-out"
                             });
        isAnimating = true;
        setTimeout(function(){isAnimating = false;}, 300);          
    });
    
    // Load Previous Image
    $('div.carouselPrev').on('click', function(){
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft - carouselSlideWidth;
        if(newLeft < 0  || isAnimating === true){return;}
        $('#carousel32 ul').css({'left': "-" + newLeft + "px",
                               "transition": "300ms ease-out"
                             });
        isAnimating = true;
        setTimeout(function(){isAnimating = false;}, 300);          
    });
  });
  
  
  
  $(document).ready(function(){
      
    // Lift card and show stats on Mouseover
    $('#product-card321').hover(function(){
            $(this).addClass('animate');
            $('div.carouselNext, div.carouselPrev').addClass('visible');            
        }, function(){
            $(this).removeClass('animate');         
            $('div.carouselNext, div.carouselPrev').removeClass('visible');
    }); 
    
    // Flip card to the back side
    $('#view_details321').click(function(){        
        $('div.carouselNext, div.carouselPrev').removeClass('visible');
        $('#product-card321').addClass('flip-10');
        setTimeout(function(){
            $('#product-card321').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
                $('#product-front321, #product-front321 div.shadow').hide();          
            });
        }, 50);
        
        setTimeout(function(){
            $('#product-card321').removeClass('flip90').addClass('flip190');
            $('#product-back321').show().find('div.shadow').show().fadeTo( 90 , 0);
            setTimeout(function(){              
                $('#product-card321').removeClass('flip190').addClass('flip180').find('div.shadow').hide();                        
                setTimeout(function(){
                    $('#product-card321').css('transition', '100ms ease-out');         
                    $('#cx321, #cy321').addClass('s1');
                    setTimeout(function(){$('#cx321, #c3y21').addClass('s2');}, 100);
                    setTimeout(function(){$('#cx321, #cy321').addClass('s3');}, 200);             
                    $('div.carouselNext, div.carouselPrev').addClass('visible');                
                }, 100);
            }, 100);            
        }, 150);            
    });         
    
    // Flip card back to the front side
    $('#flip-back321').click(function(){       
        
        $('#product-card321').removeClass('flip180').addClass('flip190');
        setTimeout(function(){
            $('#product-card321').removeClass('flip190').addClass('flip90');
    
            $('#product-back321 div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
                $('#product-back321, #product-back321 div.shadow').hide();
                $('#product-front321, #product-front321 div.shadow').show();
            });
        }, 50);
        
        setTimeout(function(){
            $('#product-card321').removeClass('flip90').addClass('flip-10');
            $('#product-front321 div.shadow').show().fadeTo( 100 , 0);
            setTimeout(function(){                      
                $('#product-front321 div.shadow').hide();
                $('#product-card321').removeClass('flip-10').css('transition', '100ms ease-out');      
                $('#cx321, #cy321').removeClass('s1 s2 s3');          
            }, 100);            
        }, 150);            
        
    }); 
  
    
    /* ----  Image Gallery Carousel   ---- */
    
    var carousel = $('#carousel321 ul');
    var carouselSlideWidth = 335;
    var carouselWidth = 0;  
    var isAnimating = false;
    
    // building the width of the casousel
    $('#carousel321 li').each(function(){
        carouselWidth += carouselSlideWidth;
    });
    $(carousel).css('width', carouselWidth);
    
    // Load Next Image
    $('div.carouselNext').on('click', function(){
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft + carouselSlideWidth;
        if(newLeft == carouselWidth || isAnimating === true){return;}
        $('#carousel321 ul').css({'left': "-" + newLeft + "px",
                               "transition": "300ms ease-out"
                             });
        isAnimating = true;
        setTimeout(function(){isAnimating = false;}, 300);          
    });
    
    // Load Previous Image
    $('div.carouselPrev').on('click', function(){
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft - carouselSlideWidth;
        if(newLeft < 0  || isAnimating === true){return;}
        $('#carousel321 ul').css({'left': "-" + newLeft + "px",
                               "transition": "300ms ease-out"
                             });
        isAnimating = true;
        setTimeout(function(){isAnimating = false;}, 300);          
    });
  });

  

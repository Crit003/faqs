function toggleContent(contentId, plusId, minusId) {
    const content = document.getElementById(contentId);
    const plusIcon = document.getElementById(plusId);
    const minusIcon = document.getElementById(minusId);
  
    if (content.style.display === "block") {
      
      content.style.display = "none";
      plusIcon.style.display = "inline";
      minusIcon.style.display = "none";
    } else {
      
      content.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "inline";
    }
  }
  
  
  document.getElementById("title1").addEventListener("click", function () {
    toggleContent("content1", "plus1", "moins1");
  });
  
  document.getElementById("title2").addEventListener("click", function () {
    toggleContent("content2", "plus2", "moins2");
  });
  
  document.getElementById("title3").addEventListener("click", function () {
    toggleContent("content3", "plus3", "moins3");
  });
  
  document.getElementById("title4").addEventListener("click", function () {
    toggleContent("content4", "plus4", "moins4");
  });
  
  
AWS.config.update({
    region: 'us-east-1'
  });
  
  function generate_image() {
    var prompt = document.getElementById("prompt").value;
    var negative_prompt = document.getElementById("negative_prompt").value;
    
    prompt_payload = "prompt=" + encodeURIComponent(prompt);
    if (negative_prompt.length > 0) {
        prompt_payload += "&negative_prompt=" + encodeURIComponent(negative_prompt);
    }
    
    var img = document.getElementById("GeneratedImage");
    img.src = ApiEndPointName + "/?" + prompt_payload;
    img.height = 512;
    img.width = 512;
    
  }
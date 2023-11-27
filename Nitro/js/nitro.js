function toggleCollapse(i) {
    const button = document.querySelector(`.expand-text-bt${i}`);
    const collapseExample = document.querySelector(`.card-body${i}`);
    const paragraph = document.querySelector(`.p-expand-bt${i}`);

    // Toggle the 'expanded' class on the button and collapseExample
    button.classList.toggle('expanded');
    collapseExample.classList.toggle('expanded');
    paragraph.classList.toggle('expanded');
    console.log(22);
  }
  const options = {
    key: "rzp_test_qtVcemXPFDaTjW",
    amount: "49900",
    currency: "INR",
    description: "Pay & Checkout this Course, Upgrade your DSA Skill",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210806114908/dummy-200x200.png",
    order_id: "order_HdPuQW0s9hY9AU",
    handler: function (response) {
      console.log(response);
      alert("This step of Payment Succeeded");
    },
    prefill: {
      //Here we are prefilling random contact
      contact: "9633202663",
      //name and email id, so while checkout
      name: "Twinkle Sharma",
      email: "smtwinkle@gmail.com",
    },
    notes: {
      description: "Best Course for SDE placements",
      language:
        "Available in 4 major Languages JAVA,C/C++, Python, Javascript",
      access: "This course have Lifetime Access",
    },
    theme: {
      color: "#2300a3",
    },
  };
  let razorpayObject = new Razorpay(options);
  console.log(razorpayObject);
  razorpayObject.on("payment.failed", function (response) {
    console.log(response);
    alert("This step of Payment Failed");
  });

  document.getElementById("nitro-basic-div-button").onclick = function (e) {
    razorpayObject.open();
    e.preventDefault();
  };
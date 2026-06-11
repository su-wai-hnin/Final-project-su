const form=document.getElementById("subscribeForm");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const email = 
    form.querySelector("input").value;

    if(email===" "){
        alert("Please enter email.");
        return;
    }
    alert("Subscribed Successfully!");

    form.reset();
});

document
.querySelectorAll('a [href^="#"]')
    .forEach(link => {
        link.addEventListener("click", e=>{
            e.preventDefault();

            const target=
            document.querySelector(
                link.getAttribute("href")
            );
            if(target){
                target.scrollIntroview({
                    behavior:"smooth"
                }
                );
            }
        });
        
    });

    const products=
    document.querySelectorAll (".product");

    products.forEach(product =>{

        product.addEventListener("mouseenter", () =>{
            product.style.transform ="translateY (-8px)";
            product.style.transition=".3s";
        });

        product.addEventListener("mouseleave", () =>{
            prodict.style.transform="translateY(0)";
        });
    });
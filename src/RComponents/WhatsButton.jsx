import React from "react";

const WhatsButton = () => {

    const telefone = "244930722855";
    const message = "Olá, Quero saber mais acerca dos vossos serviços";
    const whatsUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(message)}`;

    return (
<>
<a href={whatsUrl}
className="whatsapp-float"
target="_blank"
rel="noopener noreferrer">

    <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="whatsApp"
    />
</a>


<style>{`
.whatsapp-float {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #ffffff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

.whatsapp-float img {
  width: 35px;
  height: 35px;
}

@media (max-width: 745px) {
  .whatsapp-float {
    display: flex;
    width: 60px;
    height: 60px;
  }
}

`}
</style>

</> 
)

};
export default WhatsButton;
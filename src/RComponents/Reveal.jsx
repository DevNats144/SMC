import { useEffect, useRef } from "react";

function Reveal({children, className=''}) {
const elementRef = useRef(null)

useEffect(() => {
    const element = elementRef.current

    if (!element) return 
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            element.classList.add('show')
            observer.unobserve(element)
        }
    },
   { 
    threshold:0.15,
   }
)

observer.observe(element)
    return () =>  observer.disconnect ()}, []) 


return (
    
<div ref={elementRef} className= {`reveal ${className}`}> 
  {children}
</div>

)
}

export default Reveal;






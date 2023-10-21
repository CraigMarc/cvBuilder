import { useRef } from "react";
import ReactToPrint from "react-to-print";

//print component





const Print = () => {
   

    const componentRef = useRef();
    const handlePrint = ReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <div>
        <ComponentToPrint ref={componentRef}
       
        />
        <button onClick={handlePrint}>Print this out!</button>
      </div>
    );
  };
  /*
  const Print = (props) => {
    const ref = useRef();
    const {
  
      data,
      schoolData,
      workData,
    } = props;
  
  
    return (
      <>
        <button> </button >
  
        <Resume ref={ref}
          resData={resData}
          schoolData={schoolData}
          workData={workData}
        />
  
      </>
  
  
    )
  }
  */

  export { Print };
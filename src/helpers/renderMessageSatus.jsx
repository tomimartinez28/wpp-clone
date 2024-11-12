import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { BsCheck2All } from "react-icons/bs";

const renderMessageStatus = (status) => {
    if(status==='sending') {
      return <AiOutlineClockCircle />
    } else if (status==='sent') {
      return <BsCheck2 />
    } else if (status === 'received') {
      return <BsCheck2All />
    } else if (status === 'read'){
      return <BsCheck2All />
    }
}

export default renderMessageStatus
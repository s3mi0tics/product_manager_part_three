import { useState } from 'react';
import Form from '../components/Form';
import ShowAll from '../components/ShowAll';

const Main = () => {
  const [refresh, setRefresh] = useState(true);
  const passRefresh = ()=>(setRefresh(!refresh))  

  return (
    <div>
        <Form reloadList= {passRefresh}/>
        <ShowAll reloadList= {passRefresh} refresh={refresh}/>
    </div>
    )
};

export default Main;
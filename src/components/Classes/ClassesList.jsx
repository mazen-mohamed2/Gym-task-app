import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ClassesList = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true); // Initially set loading to true

  

  const fetchClasses = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes');    
      setClasses(response.data);    
      setLoading(false)
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setLoading(false); // Set loading to false after data fetching (whether success or error)
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const deleteClasses = async (id) => {
    try {
      await axios.delete(`https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${id}`);
      setClasses(classes.filter((classe) => classe.id !== id));
    } catch (error) {
      console.error('Error deleting classes:', error);
    }
  };

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : classes.length > 0 ? (
        <>
         <h2>classes List</h2>
      <Link to="/classes/add" className="head">Create Classes</Link>
   
      <table className="customTable">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Coach Name</th>
            <th>Timing</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes?.map((classe) => (
            <tr key={classe.title}>
              <td>{classe.title}</td>
              <td>{classe.coach_name}</td>
              <td>{classe.timing}</td>
              <td>{classe.price}</td>
              <td style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Link to={`/classes/${classe.id}`} style={{color:"blue"}}>View</Link> |
                <Link to={`/classes/${classe.id}/edit`} style={{margin:"0 10px", color:"green"}}>Edit</Link> 
                <button onClick={() => deleteClasses(classe.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
      ) : <>
      <Link to="/classes/add" className="head">Create Classes</Link>

     <h1> There is no data to show</h1> 
      </> }
     
    
    
      
    </div>
  );
};

export default ClassesList
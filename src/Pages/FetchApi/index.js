import axios from 'axios';
const url = "https://ui-blogger.herokuapp.com/api/Data";
const storeBox = async() => {
    try{
        const res = await axios.get(url);
        return res.data;

    } catch (err) {}
}
export default storeBox;
import React from 'react'
import axios from 'axios'
import {get} from '../../services/fetchData'
import SearchBar from '../SearchBar'
let cancelToken;

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component {
        state = {
            data: [],
            searchResult: []
        }
        fetchData = async (entity) => {
            try{
                const {data} = await get(entity)
                const sortData = data.slice(0, 10);
                this.setState({...this.state, data: sortData})
            }catch(err){
                if(err.response){
                    console.log(err.response.data, err.response.status,err.response.headers);
                    // server responded with other than 200 status code
                }else if(err.request){
                    // Request was made but no responce.
                    console.log('err Request', err.request)
                } else{
                    console.log('Error message', err.message)
                }
            }
        }
        onType = async(e) => {
            const search = e.target.value;
            if(typeof cancelToken != typeof undefined){
                cancelToken = cancelToken.cancel('Request Canceld...!')
            }
            cancelToken = axios.CancelToken.source()
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${entity}?q=${search}`, {cancelToken: cancelToken.token}) 
            const sortData = data.slice(0, 10);
            this.setState({...this.state, searchResult: sortData})
            console.log(data)
        }
        componentDidMount() {
            this.fetchData(entity);
        }
        render() {
            const {data, searchResult} = this.state;

            return (
                <div>
                    <SearchBar handleChange={this.onType} entity={entity} />
                    <WrappedComponent data={searchResult.length !== 0? searchResult: data} /> 
                </div>
            )
        }
    }               
}

export default HOC

import React from 'react'
import {FaLink, FaEye, FaStar, FaInfo, FaUtensils} from 'react-icons/fa'

export default function RepoItems({items}) {

    const {name, description, watchers_count, stragazers_count, open_issues, forks} = items

  return (
    <div className='mx-3 my-2 p-2 repoList' >
        <div className="name mx-2" style={{fontFamily:"math", marginTop:"8px"}}><FaLink /> {name}</div>
        <div className='mx-2'> {description}</div>
        <div className="d-flex my-2">
            <div className="text-primary mx-3"><FaEye/> {watchers_count}</div>
            <div className="text-success mx-3"><FaStar/> {stragazers_count}</div>
            <div className="text-danger mx-3"><FaInfo/> {open_issues}</div>
            <div className="text-warning mx-3"><FaUtensils/> {forks}</div>
        </div>
    </div>
  )
}

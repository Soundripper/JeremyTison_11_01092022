import './index.scss'

const Tag = ({ tag } : {tag:any}) => {
    return(
        <div className = "tag">
            <h4 className='tagName'>{tag}</h4>
        </div>
    )
}

export default Tag
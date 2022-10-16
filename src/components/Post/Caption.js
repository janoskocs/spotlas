import { useEffect, useState } from 'react'
import UserName from './User/UserName'
import truncate from 'lodash/truncate'

const Caption = ({ username, caption }) => {

    const [fullText, setCaptionText] = useState(caption.text)
    const [truncatedText, setTruncatedText] = useState('')
    const [truncated, setTruncated] = useState(true)
    const [currentText, setCurrentText] = useState('')
    useEffect(() => {
        setTruncatedText(truncate(fullText, { length: 50, omission: ' ' }))
        setCurrentText(truncatedText)
    }, [truncatedText])


    const handleTruncate = (boolean) => {
        if (boolean) {
            setTruncated(false)
            setCurrentText(fullText)
        } else {
            setTruncated(true)
            setCurrentText(truncatedText)
        }
    }
    if (fullText.length < 50) {
        return (
            <div className="caption mt-3 md:mt-4 l:mt-6 mx-2 md:mx-3 l:mx-4">
                <UserName color='black' className="inline " userName={username} />
                <p className="inline">{fullText}</p>
            </div>
        )
    } else {
        return (
            <div className="caption mt-3 md:mt-4 l:mt-6 mx-2 md:mx-3 l:mx-4">
                <UserName className="inline" userName={username} />
                <p className="inline">{currentText}</p>
                {truncated ? <button style={{ color: "#c8c8c8" }} onClick={() => handleTruncate(true)}>more...</button> : <button style={{ color: "#c8c8c8" }} onClick={() => handleTruncate(false)}> Less</button>}
            </div >
        )
    }
}

export default Caption
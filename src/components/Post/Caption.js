import { useEffect, useState } from 'react'
import UserName from './User/UserName'
import truncate from 'lodash/truncate'

const Caption = ({ username, caption }) => {

    const [fullText, setCaptionText] = useState(caption.text)
    const [truncatedText, setTruncatedText] = useState('')
    const [truncated, setTruncated] = useState(true)
    const [currentText, setCurrentText] = useState('')
    useEffect(() => {
        setTruncatedText(truncate(fullText, { length: 55, omission: ' ' }))
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
    if (fullText.length < 55) {
        return (
            <div className="caption">
                <UserName className="inline" userName={username} />
                <p className="inline">{fullText}</p>
            </div>
        )
    } else {
        return (
            <div className="caption">
                <UserName className="inline" userName={username} />
                <p className="inline">{currentText}</p>
                {truncated ? <button onClick={() => handleTruncate(true)}>more...</button> : <button onClick={() => handleTruncate(false)}> Less</button>}
            </div >
        )
    }
}

export default Caption
import { colors } from "../../../constants/colors";

export default function UIFollowButton({state = false, isCompact = false, padding = "1.5rem", fontSize = "1.25rem", iconSize = 24, onClick}){
    return(
        <>
        {isCompact ? (
            <button style={{ padding: `${padding} ${padding * 2}`, background: colors.blue}} onClick={onClick ? () => onClick : ''}></button>
        ) : (
            <button></button>
        )}
        </>
    )
}
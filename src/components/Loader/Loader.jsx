import { RotatingLines } from 'react-loader-spinner'
import { LoaderWrap } from './Loader.styled'

export function Loader() {
    return (
        <LoaderWrap>
            <RotatingLines
            strokeColor="#3f51b5"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />
        </LoaderWrap>
        
    )
}
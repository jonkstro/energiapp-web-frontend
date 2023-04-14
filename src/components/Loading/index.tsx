import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Container, Loader } from './styles';


export function Loading() {


    return (
        <Container>
            <Loader>
                <div className="lds-dual-ring"></div>
            </Loader>
        </Container>
    );
}
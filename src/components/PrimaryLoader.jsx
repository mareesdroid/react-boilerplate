// material-ui
import { Card, CardBody, Spinner, Row, Container } from 'reactstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ==============================|| LOADER ||============================== //
const PrimaryLoader = () => {
    const { text } = useSelector(state => state.ui)


    return <div className='loader_main'>
        <Row container style={{
            minHeight: '100vh',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }} direction='row' justifyContent='center' alignItems='center'>
            <Card style={{
                width: '20%',
                backgroundColor: '#2e2e2e',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CardBody style={{
                    width: text ? '20%' : '10%',
                    backgroundColor: '#2e2e2e',
                     flexDirection: 'column', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center'
                }} justifyContent='center' alignItems='center'>
                    <Spinner style={{ color: "#ECD400" }} />
                    {text && <h6 className='mt-3' style={{
                        color: "#ffffff"
                    }}>{text}</h6> }
                </CardBody>
            </Card>
        </Row>
    </div>
};

export default PrimaryLoader;

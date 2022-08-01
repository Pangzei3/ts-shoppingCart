import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import {StoreItem} from "../components/StoreItem"



export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            {/* {JSON.stringify(item)} */}
            <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
    </>
  )
    
}




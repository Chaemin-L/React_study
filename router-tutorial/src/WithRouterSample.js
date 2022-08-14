import React from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const WithRouterSample = () => {
    const params = useParams(); // url에 대한 정보
    const location = useLocation(); // 현재 페이지에 대한 정보
    const navigate = useNavigate();
    return (
        <div>
            <h4>params</h4>
            <textarea value={JSON.stringify(params)} readOnly />
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)} readOnly />
            <h4>navigate</h4>
            <button onClick={() => navigate(-1)}>홈으로</button>
        </div>

    )
}
export default WithRouterSample;

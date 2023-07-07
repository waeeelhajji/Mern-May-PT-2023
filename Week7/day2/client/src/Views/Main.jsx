import React, { useState } from 'react'
import { Dashboard } from '../components/Dashboard'
import { Form } from '../components/Form'

const Main = () => {

    const [refreshState, SetRefreshState] = useState(false)


    const refresh = () => {
        SetRefreshState(!refreshState)
    }

    return (
        <div>
            <fieldset>
                <Form refresh={refresh} />
                <Dashboard refresh={refresh} refreshState={refreshState} />
            </fieldset>
        </div>
    )
}

export default Main
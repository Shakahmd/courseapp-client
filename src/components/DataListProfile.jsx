import React from 'react'
import { DataList,Link } from '@radix-ui/themes'

const DataListProfile = () => {
  return (
    <DataList.Root size="3">
    <DataList.Item>
        <DataList.Label minWidth="88px">purchasedCount</DataList.Label>
        <DataList.Value>Vlad Moroz</DataList.Value>
    </DataList.Item>
    <DataList.Item>
        <DataList.Label minWidth="88px">Email</DataList.Label>
        <DataList.Value>
            <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
        </DataList.Value>
    </DataList.Item>
    <DataList.Item>
        <DataList.Label minWidth="88px">Company</DataList.Label>
        <DataList.Value>
            <Link target="_blank" href="https://workos.com">
                WorkOS
            </Link>
        </DataList.Value>
    </DataList.Item>
</DataList.Root>
  )
}

export default DataListProfile

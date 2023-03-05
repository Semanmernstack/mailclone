import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import OpenRow from './OpenRow'

function Open() {
  const [emails, setEmails] = useState([])
  useEffect(() =>{
      return onSnapshot(collection(db, "emails"), (snapshot) =>
      setEmails(snapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id })))

  );
  }, [])
  return (
    <div>
      {emails.map(({ id, data: { to, subject, message, timestamp}}) => (
        <OpenRow
          key={id}
          id={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}
        />
      ))}
         <OpenRow
                    title="Facebook"
                    subject="Hi love"
                    description="Can i buy metaverse from you mark"
                    time="2pm"
                />
                <OpenRow
                    title="Facebook"
                    subject="Hi love"
                    description="Can i buy metaverse from you mark"
                    time="2pm"
                />
    </div>
  )
}

export default Open
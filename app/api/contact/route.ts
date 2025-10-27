import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const { name, email, message} = await req.json();

        if( !name|| !email ||!message){
            return NextResponse.json(
                {success:false, error:"ALl fields are required"},
                {status:400}
            );
        }

        //Send to Discord WebHook
        await fetch(process.env.DISCORD_WEBHOOK_URL!, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({
                content:null,
                embeds:[
                    {
                        title:" New message from Portfolio Website",
                        color: 5814783,
                        fields: [
                            {name: "Name", value: name, inline:true},
                            {name: "Email", value: email, inline: true},
                            {name: "Message", value: message},
                        ],
                        timestamp: new Date().toISOString(),
                    },
                ],
            }),
        });
        return NextResponse.json({success:true});
    } catch (err) {
        console.error("Error Sending Discord Message:", err);
        return NextResponse.json(
            {success: false, error:"Failed to send message"},
            {status:500}
        );
    }
}
import { OnTransactionHandler } from '@metamask/snaps-types';
import { heading, panel, text } from '@metamask/snaps-ui';
import natural from 'natural';

const whitelist = require('./whitelist.js');

// Check transaction Origin. See if it is very similar to top defi protocols in the whitelist
// Check if the address of contract you are about to interact with is in the whitelist
export const onTransaction: OnTransactionHandler = async ({ transaction, transactionOrigin }) => {

    // check if the transaction origin is in the whitelist
    const checkMatchingProtocol = () => {
        for (const key in whitelist) {
            if (whitelist.hasOwnProperty(key)) {
                const obj = whitelist[key];
                const url = obj.url;

                if (url.includes(transactionOrigin)) {
                    return key
                }
            }
        }
        return undefined
    }

    // if protocol name is found, then it means a matching url was found in the whitelist so it's legit
    const urlCheck = (matchingProtocol: string) => {
        if (matchingProtocol) {
            return `Correct URL for ${matchingProtocol}`
        }
        else {
            // const phish = checkSimilarUrl()
            // if (phish) {
            //     return `***Danger***! This site may be pretending to be ${phish} but its URL is slightly different!`
            // }
            return `***No Match Found***`
        }
    }

    // const checkSimilarUrl = () => {
    //     let url;
    //     let distance;
    //     const targeturl: string = transactionOrigin as string;

    //     for (let protocol in whitelist) {
    //         url = whitelist[protocol].url
    //         distance = natural.JaroWinklerDistance(url, targeturl, { ignoreCase: true });
    //         if (distance > 0.8) {
    //             return protocol
    //         }
    //     }
    //     return undefined
    // }


    const checkContractAddress = (protocol: string) => {
        if (whitelist[protocol].addresses.includes(transaction.to)) {
            return `Legit address for ${protocol}`
        }
    }

    console.log('transactionOrigin: ', transactionOrigin);
    console.log(JSON.stringify(transaction, null, 2));
    console.log("typeof transaction.data: ", typeof transaction.data)

    // if it's a regular smart contract transaction
    if (typeof transaction.data === 'string' && transaction.data !== '0x') {

        const protocol: string = checkMatchingProtocol() as string;

        return {
            content: panel([
                heading('One last check:'),
                text(
                    `URL check: ${urlCheck(protocol)}`, "\n",
                    `Contract check: `
                ),
            ]),
        };
    }

    return {
        content: panel([
            heading('Not a smart contract transaction'),
            text(
                `We have no insights to give on this.`,
            ),
        ]),
    };


};
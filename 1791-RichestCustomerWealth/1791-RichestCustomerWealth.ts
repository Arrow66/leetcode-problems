// Last updated: 4/17/2026, 12:40:11 AM
function maximumWealth(accounts: number[][]): number {

   let n = Number.MIN_VALUE;
    for(let i=0;i<accounts.length;i++)
    {
           let sum = 0; 

        for(let j=0;j<accounts[i].length;j++)
        {
                sum+= accounts[i][j];
        }
        n = Math.max(n,sum);
    }
    return n;

};
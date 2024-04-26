interface customer{
    userid: string;
    username: string
    name: string,
    logged_in: Date;
    logged_out: Date | null;
    lastSeenAt: Date;
  }
  
  function countActiveUsers(users: customer[], currentMonth: Date): number {
    let activeUsers = 0;
    for (const user of users) {
        if (
            (user.logged_in.getMonth() === currentMonth.getMonth() && 
            user.logged_in.getFullYear() === currentMonth.getFullYear()) &&
            (user.logged_out === null || 
            (user.logged_out.getMonth() === currentMonth.getMonth() &&
            user.logged_out.getFullYear() === currentMonth.getFullYear())) ||
            (user.lastSeenAt.getMonth() === currentMonth.getMonth() &&
            user.lastSeenAt.getFullYear() === currentMonth.getFullYear())
        ) {
            activeUsers++;
        }
    }
    return activeUsers;
  }
  
  function countLoggedInUsers(users: customer[], currentMonth: Date): number {
    let loggedInUsers = 0;
    for (const user of users) {
        if (
            user.logged_in.getMonth() === currentMonth.getMonth() &&
            user.logged_in.getFullYear() === currentMonth.getFullYear()
        ) {
            loggedInUsers++;
        }
    }
    return loggedInUsers;
  }
  
  // here are the fake users created to test the logic
  const users: customer[] = [
    { userid: "1cv23s001sdf", username:"Daniel_1099", name:"Daniel Wellson", logged_in: new Date("2024-04-06"), logged_out: null, lastSeenAt: new Date("2024-04-06") },
    { userid: "123nnsrw4094",  username:"Kend_47", name:"Kendrik Lamar", logged_in: new Date("2023-09-1"), logged_out: new Date("2024-02-14"), lastSeenAt: new Date("2024-02-20") },
    { userid: "123nnsrw4094",  username:"DrakeCole", name:"Drake Cole", logged_in: new Date("2023-10-25"), logged_out: null, lastSeenAt: new Date("2024-04-27") },
    { userid: "123nnsrw4094",  username:"Fredrick_boi", name:"Fredrick Wayne", logged_in: new Date("2023-06-17"), logged_out: new Date("2024-03-1"), lastSeenAt: new Date("2024-03-1") },
    { userid: "3edgfg23sd2e", username:"dast_cham", name:"Dustin Chamber", logged_in: new Date("2024-01-1"), logged_out: new Date("2024-04-27"), lastSeenAt: new Date("2024-04-19") },
  ];
  
  const currentMonth = new Date(); 
  const activeUsersCount = countActiveUsers(users, currentMonth);
  const loggedInUsersCount = countLoggedInUsers(users, currentMonth);
  
  console.log("Active users this month:", activeUsersCount);
  console.log("Logged in users this month:", loggedInUsersCount);

export const FEEDBACK_PROMPT = `{{conversation}}
Depends on this Interview Conversation between assitant and user, 
Give me feedback for user interview. Give me rating out of 10 for technical Skills, 
Communication, Problem Solving, Experince. Also give me summery in 3 lines 
about the interview and one line to let me know whether is recommanded 
for hire or not with msg. Give me response in JSON format
{

    feedback:{

        rating:{

            techicalSkills:<rate them on 0 to 10 according to the Conversation. BE STRICK WHILE GIVING THIS NUMBERS>,

            communication:<rate them on 0 to 10 according to the Conversation. BE STRICK WHILE GIVING THIS NUMBERS>,

            problemSolving:<rate them on 0 to 10 according to the Conversation. BE STRICK WHILE GIVING THIS NUMBERS>,

            experince:<rate them on 0 to 10 according to the Conversation. BE STRICK WHILE GIVING THIS NUMBERS>,

            totalRating:<average rating of above 4>

        },

        summery:<in 3 Line>,

        Recommendation:<true or false>,

        RecommendationMsg:''

    }

}
`;

function genFinancialInfo(){
    var infoArray = [
        "Financial Literacy is the ability to understand and effectively use various financial skills such as budgeting and investing!",
        "Investing is about taking calculated risks with your money to try to earn even more with it!",
        "Budgeting can help you to create financial stability and responsibility",
        "Income is the money you receive on a regular basis, this could be from work or investments"
    ];
        var randomIndex = Math.floor(Math.random() * infoArray.length);
        return infoArray[randomIndex];
 }
var infobox = document.getElementById("information");
infobox.textContent = genFinancialInfo();

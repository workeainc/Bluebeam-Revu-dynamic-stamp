// ===============================================
// BLUEBEAM REVU DYNAMIC STAMP - USER INPUT SCRIPT
// ===============================================
// This script prompts the user for input when the stamp is placed
// and stores the response in a custom Text column in the Markups List
//
// INSTRUCTIONS:
// 1. Replace "YOUR_COLUMN_NAME" with your actual custom Text column name
// 2. Replace "UserInputField" with your form field name if different
// 3. Paste this code in the form field's calculation script
// ===============================================

// Check if this is a real stamp placement (not preview or update)
if (event.source.forReal) {
    
    // Prompt the user for input
    var userResponse = app.response({
        cQuestion: "Please enter the required information:",
        cTitle: "Stamp Input",
        cLabel: "Enter value:",
        bPassword: false,
        cDefault: ""
    });
    
    // Only proceed if user provided input (didn't cancel)
    if (userResponse !== null && userResponse !== "") {
        
        // Update the visual display on the stamp
        this.getField("UserInputField").value = userResponse;
        
        // Write to the custom Text column in Markups List
        try {
            // Get the current annotation (this stamp)
            var annot = this.getAnnot(this.pageNum, event.target.name);
            
            if (annot) {
                // Set the custom data for the column
                // REPLACE "YOUR_COLUMN_NAME" with your actual column name
                annot.setCustomData("YOUR_COLUMN_NAME", userResponse);
            }
        } catch (error) {
            // Error handling - could add logging here if needed
            console.println("Error writing to custom column: " + error.toString());
        }
    }
}

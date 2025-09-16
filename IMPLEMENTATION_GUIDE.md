# BLUEBEAM REVU DYNAMIC STAMP IMPLEMENTATION GUIDE

## 📋 DELIVERABLES

### 1. JavaScript Code (Ready to Use)
The complete script is in `bluebeam_dynamic_stamp_script.js` - copy the entire contents.

### 2. Installation Instructions

#### **Step 1: Prepare Your Stamp**
1. Open your dynamic stamp PDF in Bluebeam Revu
2. Go to **Forms** tab → **JavaScript Editor**
3. Select the form field where you want the user input to display
4. In the field properties, go to **Calculate** tab
5. Select **Custom calculation script**

#### **Step 2: Paste the Code**
1. Copy the entire JavaScript code from `bluebeam_dynamic_stamp_script.js`
2. Paste it into the calculation script area
3. **IMPORTANT**: Replace `"YOUR_COLUMN_NAME"` with your actual custom Text column name
4. **IMPORTANT**: Replace `"UserInputField"` with your actual form field name (if different)

#### **Step 3: Configure Your Custom Column**
1. Open **Markups List** in Bluebeam Revu
2. Click the **gear icon** (⚙️) in the Markups List
3. Select **Manage Columns**
4. Ensure your custom Text column exists
5. Note the exact column name (case-sensitive)

## 🔧 CONFIGURATION REQUIREMENTS

### **Custom Text Column Setup**
- **Column Type**: Text
- **Column Name**: Must match exactly what you put in the script
- **Access Level**: Must be editable via JavaScript
- **Data Type**: String/text

### **Form Field Requirements**
- **Field Type**: Text field
- **Field Name**: Must match the script reference
- **Visibility**: Should be visible on the stamp
- **Calculation Script**: Where you paste the code

## ⚡ HOW IT WORKS

1. **Trigger**: Script runs only when stamp is placed (`event.source.forReal`)
2. **Prompt**: User sees a clean dialog asking for input
3. **Storage**: Response is written to your custom Text column
4. **Display**: Input also shows on the stamp itself
5. **Safety**: Handles user cancellation gracefully

## 🧪 TESTING STEPS

1. Place the stamp on a test PDF
2. Verify the prompt dialog appears
3. Enter test data and click OK
4. Check that the Markups List shows your data
5. Verify the stamp displays the input visually

## 🚨 TROUBLESHOOTING

### **Common Issues:**
- **"Column not found"**: Check exact column name spelling
- **"Field not found"**: Verify form field name matches script
- **No prompt appears**: Ensure code is in calculation script, not document script
- **Data not saving**: Check column permissions in Markups List

### **Column Name Examples:**
- `"ProjectNumber"`
- `"DateStamp"`
- `"UserNotes"`
- `"CustomText"`

## 📝 NOTES

- Script only runs on initial placement, not on updates
- User can cancel the prompt (script handles this)
- Error handling included for robustness
- Works with any existing Text column
- No external dependencies required

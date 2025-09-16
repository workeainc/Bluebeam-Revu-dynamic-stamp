# Bluebeam Revu Dynamic Stamp Input Script

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bluebeam Revu](https://img.shields.io/badge/Bluebeam-Revu-blue.svg)](https://www.bluebeam.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES5-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A professional JavaScript solution for Bluebeam Revu dynamic stamps that automatically prompts users for input upon placement and stores responses in custom Markups List columns.

## 🎯 Overview

This project provides a complete JavaScript implementation for Bluebeam Revu dynamic stamps that:

- **Triggers only on stamp placement** (not on updates or document saves)
- **Prompts users with a clean dialog** for input collection
- **Automatically writes responses** to existing custom Text columns in the Markups List
- **Handles edge cases** like user cancellation and errors gracefully
- **Works with any existing stamp structure** without modifications

## ✨ Features

- 🚀 **One-time execution** - Runs only when stamp is placed
- 💬 **User-friendly prompts** - Clean, professional input dialogs
- 📊 **Markups List integration** - Direct writing to custom columns
- 🛡️ **Error handling** - Robust error management and user cancellation support
- 🔧 **Zero dependencies** - Uses only Bluebeam's native JavaScript API
- 📱 **Universal compatibility** - Works with any existing Text column setup

## 🏗️ Use Cases

Perfect for construction, engineering, and inspection workflows:

- **Inspection stamps** - Capture inspector names, dates, notes
- **Approval workflows** - Collect approver information
- **Quality control** - Record QC personnel details
- **Project tracking** - Store project numbers, phases, locations
- **Compliance documentation** - Capture regulatory information

## 📁 Project Structure

```
Bluebeam-Revu-dynamic-stamp/
├── bluebeam_dynamic_stamp_script.js    # Main JavaScript implementation
├── IMPLEMENTATION_GUIDE.md             # Detailed setup instructions
└── README.md                           # This file
```

## 🚀 Quick Start

### Prerequisites

- Bluebeam Revu (any recent version)
- Existing dynamic stamp with form fields
- Custom Text column in Markups List

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/workeainc/Bluebeam-Revu-dynamic-stamp.git
   ```

2. **Open your dynamic stamp** in Bluebeam Revu

3. **Access the JavaScript Editor**
   - Go to **Forms** tab → **JavaScript Editor**
   - Select your form field → **Calculate** tab → **Custom calculation script**

4. **Copy and customize the script**
   ```javascript
   // Replace these placeholders:
   "UserInputField" → Your actual form field name
   "YOUR_COLUMN_NAME" → Your custom Text column name
   ```

5. **Test the implementation**
   - Place the stamp on a test PDF
   - Verify the prompt dialog appears
   - Confirm data appears in Markups List

## 📖 Detailed Documentation

For comprehensive setup instructions, troubleshooting, and advanced configuration, see the [Implementation Guide](IMPLEMENTATION_GUIDE.md).

## 🔧 Configuration

### Required Customizations

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `"UserInputField"` | Form field name in your stamp | `"InspectorName"` |
| `"YOUR_COLUMN_NAME"` | Custom Text column name | `"Inspector"` |

### Column Setup Requirements

- **Type**: Text
- **Access**: Editable via JavaScript
- **Data Type**: String/text
- **Case Sensitivity**: Exact name matching required

## 🧪 Testing

### Test Checklist

- [ ] Prompt dialog appears on stamp placement
- [ ] User input is captured correctly
- [ ] Data appears in Markups List column
- [ ] Stamp visual display updates
- [ ] User cancellation handled gracefully
- [ ] No errors in Bluebeam console

### Common Test Scenarios

1. **Normal operation** - Enter valid input
2. **User cancellation** - Click Cancel in prompt
3. **Empty input** - Submit empty response
4. **Special characters** - Test with symbols, numbers
5. **Long text** - Test with extended responses

## 🛠️ Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| "Column not found" | Verify exact column name spelling |
| "Field not found" | Check form field name matches script |
| No prompt appears | Ensure code is in calculation script |
| Data not saving | Check column permissions in Markups List |

### Debug Tips

- Use Bluebeam's JavaScript console for error messages
- Test with simple field/column names first
- Verify Markups List column exists and is editable
- Check form field properties for correct naming

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

- Follow existing code style and commenting
- Test thoroughly with different Bluebeam versions
- Update documentation for any new features
- Include error handling for edge cases

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Bluebeam Technologies for the robust JavaScript API
- The Bluebeam community for best practices and examples
- Contributors and testers who helped refine this solution

## 📞 Support

**EA Soft Lab - A sister concern of EA Inc.**

- **Website**: [www.easoftlab.com](https://www.easoftlab.com)
- **GitHub**: [github.com/workeainc](https://github.com/workeainc)
- **Email**: [contact@easoftlab.com](mailto:contact@easoftlab.com)
- **Issues**: [GitHub Issues](https://github.com/workeainc/Bluebeam-Revu-dynamic-stamp/issues)
- **Documentation**: [Implementation Guide](IMPLEMENTATION_GUIDE.md)

## 🔗 Related Projects

- [Bluebeam Revu API Documentation](https://support.bluebeam.com/)
- [PDF JavaScript Reference](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/js_api_reference.pdf)

---

**Built with ❤️ by EA Soft Lab**

[![GitHub](https://img.shields.io/badge/GitHub-workeainc-grey.svg)](https://github.com/workeainc) [![Website](https://img.shields.io/badge/Website-easoftlab.com-blue.svg)](https://www.easoftlab.com)

# 🏗️ Bluebeam Revu Dynamic Stamp Input Script

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bluebeam Revu](https://img.shields.io/badge/Bluebeam-Revu-blue.svg)](https://www.bluebeam.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES5-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![EA Soft Lab](https://img.shields.io/badge/EA%20Soft%20Lab-Professional-green.svg)](https://www.easoftlab.com)

**Professional JavaScript solution for Bluebeam Revu dynamic stamps**

*Automatically prompts users for input upon placement and stores responses in custom Markups List columns*

[🚀 Quick Start](#-quick-start) • [📖 Documentation](#-detailed-documentation) • [🛠️ Support](#-support) • [💬 Contact](#-contact)

</div>

---

## 🎯 **What This Solves**

Transform your Bluebeam Revu workflow with intelligent dynamic stamps that:
- **Capture user input instantly** when stamps are placed
- **Automatically populate custom columns** in Markups List
- **Eliminate manual data entry** errors and inconsistencies
- **Streamline inspection and approval processes** across teams

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

4. **Copy the ready-to-use script**
   ```javascript
   // Script is pre-configured for "CheckedBy" field and column
   // No customization needed - works out of the box!
   ```

5. **Test the implementation**
   - Place the stamp on a test PDF
   - Verify the prompt dialog appears
   - Confirm data appears in Markups List

## 📖 Detailed Documentation

For comprehensive setup instructions, troubleshooting, and advanced configuration, see the [Implementation Guide](IMPLEMENTATION_GUIDE.md).

## 🔧 Configuration

### ✅ **Pre-Configured Setup**

| Component | Value | Status |
|-----------|-------|--------|
| **Form Field Name** | `"CheckedBy"` | ✅ Ready |
| **Custom Column Name** | `"CheckedBy"` | ✅ Ready |
| **Script Configuration** | Pre-configured | ✅ Ready |

**No customization required** - the script works immediately with standard "CheckedBy" field and column names.

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

## 🛠️ Support

<div align="center">

### **EA Soft Lab** - *A sister concern of EA Inc.*

**Professional Software Development & Consulting**

[![Website](https://img.shields.io/badge/Website-easoftlab.com-blue.svg)](https://www.easoftlab.com)
[![GitHub](https://img.shields.io/badge/GitHub-workeainc-grey.svg)](https://github.com/workeainc)
[![Email](https://img.shields.io/badge/Email-contact@easoftlab.com-red.svg)](mailto:contact@easoftlab.com)

</div>

### 📞 **Get Help**

| Channel | Link | Response Time |
|---------|------|---------------|
| **🌐 Website** | [www.easoftlab.com](https://www.easoftlab.com) | 24 hours |
| **📧 Email** | [contact@easoftlab.com](mailto:contact@easoftlab.com) | 24 hours |
| **💬 Telegram** | [@emranulhsn](https://t.me/emranulhsn) | 2-4 hours |
| **📱 WhatsApp** | [+8801973772272](https://wa.me/8801973772272) | 2-4 hours |
| **🐛 Issues** | [GitHub Issues](https://github.com/workeainc/Bluebeam-Revu-dynamic-stamp/issues) | 48 hours |

### 📚 **Documentation**

- **📖 Implementation Guide**: [Complete Setup Instructions](IMPLEMENTATION_GUIDE.md)
- **🔧 Troubleshooting**: See guide for common issues and solutions
- **💡 Examples**: Ready-to-use code with real-world applications

## 🔗 Related Projects

- [Bluebeam Revu API Documentation](https://support.bluebeam.com/)
- [PDF JavaScript Reference](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/js_api_reference.pdf)

---

<div align="center">

## 💼 **Professional Services**

**EA Soft Lab** specializes in custom software solutions for construction, engineering, and project management workflows.

### 🚀 **What We Offer**
- **Custom Bluebeam Scripts** - Tailored solutions for your specific needs
- **Workflow Automation** - Streamline your document processes
- **Integration Services** - Connect Bluebeam with your existing systems
- **Training & Support** - Get your team up to speed quickly

### 📈 **Why Choose EA Soft Lab?**
- ✅ **Proven Expertise** in Bluebeam Revu development
- ✅ **Fast Turnaround** - Most projects completed within 48 hours
- ✅ **Ongoing Support** - We're here when you need us
- ✅ **Competitive Pricing** - Professional quality at fair rates

**Ready to transform your Bluebeam workflow?** [Get in touch today!](https://www.easoftlab.com)

---

**Built with ❤️ by EA Soft Lab** | *A sister concern of EA Inc.*

[![GitHub](https://img.shields.io/badge/GitHub-workeainc-grey.svg)](https://github.com/workeainc) 
[![Website](https://img.shields.io/badge/Website-easoftlab.com-blue.svg)](https://www.easoftlab.com)
[![Telegram](https://img.shields.io/badge/Telegram-@emranulhsn-blue.svg)](https://t.me/emranulhsn)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+8801973772272-green.svg)](https://wa.me/8801973772272)

</div>

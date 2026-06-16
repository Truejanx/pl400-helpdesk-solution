using System;
using Microsoft.Xrm.Sdk;

namespace PL400.Plugins
{
    public class PreventStatusRegression : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)
                serviceProvider.GetService(typeof(IPluginExecutionContext));

            if (context.MessageName.ToLower() != "update" ||
                !(context.InputParameters["Target"] is Entity target) ||
                target.LogicalName != "cdev_helpdeskticket")
            {
                return;
            }

            if (!target.Attributes.Contains("cdev_status"))
            {
                return;
            }

            if (!context.PreEntityImages.Contains("PreImage"))
            {
                return;
            }

            var preImage = context.PreEntityImages["PreImage"];

            var oldStatus = preImage.GetAttributeValue<OptionSetValue>("cdev_status")?.Value;
            var newStatus = target.GetAttributeValue<OptionSetValue>("cdev_status")?.Value;

            const int STATUS_NEW = 1;
            const int STATUS_IN_PROGRESS = 2;

            if (oldStatus.HasValue && oldStatus.Value >= STATUS_IN_PROGRESS &&
                newStatus.HasValue && newStatus.Value == STATUS_NEW)
            {
                throw new InvalidPluginExecutionException(
                    "A ticket cannot be moved back to 'New' once work has started.");
            }
        }
    }
}

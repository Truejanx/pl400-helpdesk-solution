# Dataverse Web API — OData Query Examples

All queries target the cdev_helpdeskticket custom table.

Required headers: OData-MaxVersion: 4.0 | OData-Version: 4.0 | Accept: application/json | Authorization: Bearer token

---

## 1. Open high-priority tickets

GET [Org URI]/api/data/v9.2/cdev_helpdeskticketses
    ?$select=cdev_ticketnumber,cdev_subject,cdev_priority
    &$filter=cdev_status eq 1 and cdev_priority eq 1
    &$orderby=createdon desc
    &$top=25

---

## 2. Single ticket with related contact

GET [Org URI]/api/data/v9.2/cdev_helpdeskticketses(RECORD-GUID)
    ?$select=cdev_ticketnumber,cdev_subject
    &$expand=cdev_Contact($select=fullname,emailaddress1)

---

## 3. Count of unresolved tickets

GET [Org URI]/api/data/v9.2/cdev_helpdeskticketses
    ?$filter=cdev_status ne 4
    &$count=true

Response includes @odata.count with the total row count.

---

## Notes
- Change tracking delta queries do NOT support $orderby or $count
- Always use $select in production
- Alternate keys can replace the GUID in the URL

<script setup>
import Title from '@/components/Title.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

const dataTableItems = [
  { name: 'Jim', email: 'mail@mail.com', lifetimeRevenue: '$30.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'John', email: 'mail@mail.com', lifetimeRevenue: '$10.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Mary', email: 'mail@mail.com', lifetimeRevenue: '$50.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Sue', email: 'mail@mail.com', lifetimeRevenue: '$670.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Chaz', email: 'mail@mail.com', lifetimeRevenue: '$40.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Merry', email: 'mail@mail.com', lifetimeRevenue: '$13.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Sue', email: 'mail@mail.com', lifetimeRevenue: '$45.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Dino', email: 'mail@mail.com', lifetimeRevenue: '$67.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
  { name: 'Mike', email: 'mail@mail.com', lifetimeRevenue: '$34.00', lastPayment: 'Jan 24th, 2024 at 3:02 pm', creationTime: 'Jan 24th, 2024 at 3:02 pm' },
];

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="r-container-fluid">
    <Title title="John Doe" :primary-action="false" :secondary-action="false" secondary-action-icon="actions" />
    <div class="r-d-flex stats">
      <div class="stat-item">
        <p class="r-text-muted">Customer since</p>
        <h3>6 years</h3>
      </div>
      <div class="stat-item">
        <p class="r-text-muted">Lifetime revenue</p>
        <h3>$17,140.85 USD</h3>
      </div>
      <div class="stat-item">
        <p class="r-text-muted">Average value</p>
        <h3>$48.15 USD</h3>
      </div>
      <div class="stat-item">
        <p class="r-text-muted">Payments</p>
        <h3>356</h3>
      </div>
      <div class="stat-item">
        <p class="r-text-muted">Last payment</p>
        <h3>3 days ago</h3>
      </div>
      <div class="stat-item">
        <p class="r-text-muted">Payment instruments</p>
        <h3 class="r-d-inline-block">4111 11** **** 1111</h3>
        <RButton class="r-ml-3" type="unstyled" size="small">Manage</RButton>
      </div>
    </div>
    <div class="r-grid r-flex-row-reverse">
      <div class="r-grid-item details">
        <div class="r-grid">
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Customer details</h2>
                  <RButton type="unstyled" size="small">Edit</RButton>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Id</p>
                  <p class="id" v-tooltip="{ text: 'Copy id' }">payout-ZU6yD4nZm1NbGacEeeyZj</p>
                </div>
                <div>
                  <p class="r-fw-medium">Address</p>
                  <p class="r-text-muted">Joe Doe</p>
                  <p class="r-text-muted">25st New York</p>
                  <p class="r-text-muted">124564, USA</p>
                  <p class="r-text-muted">675569954 (Main)</p>
                  <p class="r-text-primary">joedoe@mail.com</p>
                </div>
              </div>
              <div class="tile-content">
                <RBadge type="tag-secondary" class="r-inline-3" :close="true">
                  <RIcon icon="tag" /> Tag
                </RBadge>
                <RBadge type="tag" class="r-mb-0">
                  <RIcon icon="plus" /> Add tag
                </RBadge>
              </div>
            </div>
          </div>
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Custom fields</h2>
                </div>
                <p class="r-text-muted">No custom field data available.</p>
              </div>
            </div>
          </div>
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Subscriptions</h2>
                </div>
                <h3 class="r-stack-3">Active<RBadge type="positive" class="r-ml-4">2</RBadge>
                </h3>
                <div class="r-grid-fitted">
                  <div class="r-grid-item">
                    <table class="r-table r-table-ultra-compact r-table-definition">
                      <colgroup>
                        <col class="r-width-12">
                      </colgroup>
                      <tr>
                        <td>Products</td>
                        <td class="r-pl-3">my app (my-app)</td>
                      </tr>
                      <tr>
                        <td>Plans</td>
                        <td class="r-pl-3">
                          <span class="r-text-truncate r-d-block" style="width: 100px">
                            Awesome T-Shirt (some other text)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Created</td>
                        <td class="r-pl-3">Apr 5th, 2024 at 10:40 am</td>
                      </tr>
                      <tr>
                        <td>Starts</td>
                        <td class="r-pl-3">Apr 5th, 2024 at 10:40 am</td>
                      </tr>
                      <tr>
                        <td>Renewal</td>
                        <td class="r-pl-3">–</td>
                      </tr>
                    </table>
                  </div>
                  <div class="r-grid-item r-flex-none">
                    <RButton size="small" type="plain" icon="actions" />
                  </div>
                </div>
                <div class="divider is-muted r-mt-3 r-mb-3"></div>
                <div class="r-grid-fitted">
                  <div class="r-grid-item">
                    <table class="r-table r-table-ultra-compact r-table-definition">
                      <colgroup>
                        <col class="r-width-12">
                      </colgroup>
                      <tr>
                        <td>Products</td>
                        <td class="r-pl-3">my app (my-app)</td>
                      </tr>
                      <tr>
                        <td>Plans</td>
                        <td class="r-pl-3">
                          <span class="r-text-truncate r-d-block" style="width: 100px">
                            Awesome T-Shirt (some other text)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Created</td>
                        <td class="r-pl-3">Apr 5th, 2024 at 10:40 am</td>
                      </tr>
                      <tr>
                        <td>Starts</td>
                        <td class="r-pl-3">Apr 5th, 2024 at 10:40 am</td>
                      </tr>
                      <tr>
                        <td>Renewal</td>
                        <td class="r-pl-3">–</td>
                      </tr>
                    </table>
                  </div>
                  <div class="r-grid-item r-flex-none">
                    <RButton size="small" type="plain" icon="actions" />
                  </div>
                </div>
              </div>
              <div class="tile-content">
                <h3 class="r-stack-3">Pending<RBadge type="warning" class="r-ml-4">1</RBadge></h3>
                <div class="r-grid-fitted">
                  <div class="r-grid-item">
                    <table class="r-table r-table-ultra-compact r-table-definition">
                      <colgroup>
                        <col class="r-width-12">
                      </colgroup>
                      <tr>
                        <td>Products</td>
                        <td class="r-pl-3">my app (my-app)</td>
                      </tr>
                      <tr>
                        <td>Plans</td>
                        <td class="r-pl-3">
                          <span class="r-text-truncate r-d-block" style="width: 100px">
                            Awesome T-Shirt (some other text)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Created</td>
                        <td class="r-pl-3">Apr 5th, 2024 at 10:40 am</td>
                      </tr>
                      <tr>
                        <td>Starts</td>
                        <td class="r-pl-3">Apr 5th, 2024 at 10:40 am</td>
                      </tr>
                      <tr>
                        <td>Renewal</td>
                        <td class="r-pl-3">–</td>
                      </tr>
                    </table>
                  </div>
                  <div class="r-grid-item r-flex-none">
                    <RButton size="small" type="plain" icon="actions" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>One time orders</h2>
                </div>
                <h3 class="r-stack-3">Paid<RBadge type="positive" class="r-ml-4">1</RBadge>
                </h3>
                <div class="r-grid-fitted">
                  <div class="r-grid-item">
                    <table class="r-table r-table-ultra-compact r-table-definition">
                      <colgroup>
                        <col class="r-width-12">
                      </colgroup>
                      <tr>
                        <td>Products</td>
                        <td class="r-pl-3">my app (my-app)</td>
                      </tr>
                      <tr>
                        <td>Plans</td>
                        <td class="r-pl-3">
                          <span class="r-text-truncate r-d-block" style="width: 100px">
                            Awesome T-Shirt (some other text)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Created</td>
                        <td class="r-pl-3">Apr 5th, 2024 at 10:40 am</td>
                      </tr>
                      <tr>
                        <td>Starts</td>
                        <td class="r-pl-3">Apr 5th, 2024 at 10:40 am</td>
                      </tr>
                      <tr>
                        <td>Renewal</td>
                        <td class="r-pl-3">–</td>
                      </tr>
                    </table>
                  </div>
                  <div class="r-grid-item r-flex-none">
                    <RButton size="small" type="plain" icon="actions" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Tax ID numbers</h2>
                  <RButton type="unstyled" size="small">Add tax id number</RButton>
                </div>
                <p class="r-text-muted r-stack-3">Add tax ID numbers to include on invoices. Set any tax ID number as a default. Learn more.</p>
                <p class="r-text-muted">Tax ID numbers of the type 'Other' are not validated.</p>
              </div>
            </div>
          </div>

          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Lead source</h2>
                </div>
                <p class="r-text-muted">No lead sources were found</p>
              </div>
            </div>
          </div>
          
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>KYC</h2>
                  <RButton type="link" size="small">Upload KYC documents</RButton>
                </div>
                <p class="r-text-muted">This customer has no associated KYC documents.</p>
              </div>
            </div>
          </div>

          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>AML Checks</h2>
                  <RButton type="link" size="small">Upload KYC documents</RButton>
                </div>
                <p class="r-text-muted">This customer has no associated AML checks.</p>
              </div>
            </div>
          </div>

          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Enhanced due diligence (EDD)</h2>
                </div>
                <RCheckbox label="EDD is required for this customer"/>
              </div>
            </div>
          </div>

          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary-v2">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>External identifiers</h2>
                </div>
                <p class="r-text-muted">No external identifiers were found</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="r-grid-item r-grid-item-primary">
        <RTabs class="r-mt-4" contentClass="r-inset-0 r-mb-0">
          <RTab name="Timeline">
            <div class="timeline">
              <div class="timeline-content">
                <div class="timeline-comment-input r-pt-0">
                  <div class="r-grid-fitted r-grid-unstackable">
                    <div class="r-grid-item r-flex-none r-inline-3">
                      <RAvatar initials="JD" />
                    </div>
                    <div class="r-grid-item">
                      <div class="r-field-input">
                        <div class="r-grid-fitted r-grid-unstackable">
                          <div class="r-grid-item">
                            <div contenteditable="true" class="content-editable r-text-muted"
                              placeholder="Write a new note and press enter">

                            </div>
                          </div>
                          <div class="r-grid-item r-flex-none">
                            <button role=""
                              class="r-button r-button-size-small r-button-type-plain r-has-icon r-position-relative"
                              title="">
                              <svg class="r-icon r-icon-20" data-testid="at">
                                <use xlink:href="#icon-at" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                              </svg>
                            </button>
                            <div style="display: inline-block;">
                              <input type="file" multiple="" class="r-hide">
                              <button role=""
                                class="r-button r-button-size-small r-button-type-plain r-has-icon r-position-relative"
                                title="">
                                <svg class="r-icon r-icon-20" data-testid="clip">
                                  <use xlink:href="#icon-clip" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                                </svg>
                              </button>
                            </div>
                            <button role=""
                              class="r-button r-button-size-small r-button-type-plain r-has-icon r-position-relative"
                              title="">
                              <svg class="r-icon r-icon-20" data-testid="sharp">
                                <use xlink:href="#icon-sharp" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="r-grid-item r-flex-none r-ml-3">
                      <button role="" class="r-button r-button-size-regular r-button-type-default r-position-relative"
                        title="">
                        <div class="r-tt-sentencecase" role="button">Expand all</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="timeline-messages">
                  <div class="timeline-group">
                    <div class="r-grid-fitted r-grid-unstackable">
                      <div class="r-grid-item r-flex-none">
                        <svg class="r-icon r-icon-20 r-inline-3" data-testid="calendar">
                          <use xlink:href="#icon-calendar" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                        </svg>
                      </div>
                      <div class="r-grid-item">
                        <h3 class="r-text-left">April 3, 2024</h3>
                      </div>
                    </div>
                  </div>
                  <div class="has-details timeline-message"><div id="#message.anchorId" class="timeline-message-anchor"></div><div class="detailed-message is-active" entity="[object Object]"><div class="r-grid-fitted r-grid-unstackable timeline-message-summary"><div class="r-grid-item"><div class="r-d-inline-block v-mask r-inline-3" style="max-width: 95%;"><span class="">
                    <a @click="router.push({name: 'details'})" class="r-text-primary r-fw-medium" title="" data-id="txn_01HMW4HFAZ5NJ4TB4C4NGMGCX0">Transaction</a></span> for USD $30.00 was <span class="highlight highlight-success">approved</span> by TestProcessor.</div><svg class="r-icon r-icon-20 r-is-rotating-right" data-testid="caret-right"><use xlink:href="#icon-caret-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></div><div class="r-grid-item r-flex-none"><a class="r-text-muted timeline-message-time" title="January 23rd 04:45:08 PM" href="/7457548f-20a0-4c1d-a56b-46bde24f3832/customers/cus_01HMW4HF2QMJZ3EJKEQ7T04TFQ#timeline-message-tmln_01HMW4HFSC7TPVV54Y85N10V37">04:45 pm</a></div></div><table class="r-table timeline-details-content" message-type="transaction-approved"><tbody><tr><td class="r-text-muted" width="50%"><span>Order</span></td><td class="r-wb-break-word"><div>txn_01HMW4HFAZ5NJ4TB4C4NGMGCX0</div></td></tr><tr><td class="r-text-muted" width="50%"><span>Website Id</span></td><td class="r-wb-break-word"><div>my-awesome-website</div></td></tr><tr><td class="r-text-muted" width="50%"><span>Type</span></td><td class="r-wb-break-word"><div>sale</div></td></tr><tr><td class="r-text-muted" width="50%"><span>Amount</span></td><td class="r-wb-break-word"><div>USD $30.00</div></td></tr><tr><td class="r-text-muted" width="50%"><span>Gateway Account Id</span></td><td class="r-wb-break-word"><div>testprocessor</div></td></tr></tbody></table><table class="r-table timeline-details-content" message-type="transaction-approved"><tbody><tr><td class="r-text-muted" width="50%"><span>Message</span></td><td class="r-wb-break-word"><div>Approved/Completed successfully or PIN verification is valid</div></td></tr><tr><td class="r-text-muted" width="50%"><span>Code</span></td><td class="r-wb-break-word"><div>00</div></td></tr><tr><td class="r-text-muted" width="50%"><span>Type</span></td><td class="r-wb-break-word"><div>approved</div></td></tr><tr><td class="r-text-muted" width="50%"><span>Original Message</span></td><td class="r-wb-break-word"><div>Transaction approved</div></td></tr><tr><td class="r-text-muted" width="50%"><span>Original Code</span></td><td class="r-wb-break-word"><div>00</div></td></tr></tbody></table></div></div>
                  
                  <div class="timeline-message">
                    <div id="#message.anchorId" class="timeline-message-anchor"></div>
                    <div class="detailed-message" entity="[object Object]">
                      <div class="r-grid-fitted r-grid-unstackable timeline-message-summary">
                        <div class="r-grid-item">
                          <div class="r-d-inline-block v-mask r-inline-3" style="max-width: 95%;">Default payment instrument <span class="highlight highlight-">changed</span> to a Visa ending in 1111 by Test API Key 2  (API key).</div>
                        </div>
                        <div class="r-grid-item r-flex-none"><a class="r-text-muted timeline-message-time"
                            title="April 3rd 12:34:22 PM"
                            href="/7457548f-20a0-4c1d-a56b-46bde24f3832/transactions/207#timeline-message-tmln_01HTJCZG1STVKR78NQR8TRD4VM">12:34
                            pm</a></div>
                      </div><!--v-if-->
                    </div>
                  </div>
                  <div class="has-details timeline-message"><div id="#message.anchorId" class="timeline-message-anchor"></div><div class="detailed-message" entity="[object Object]"><div class="r-grid-fitted r-grid-unstackable timeline-message-summary"><div class="r-grid-item"><div class="r-d-inline-block v-mask r-inline-3" style="max-width: 95%;">Customer John Doe <span class="highlight highlight-success">created</span> by Test API Key 2  (API key).</div><svg class="r-icon r-icon-20" data-testid="caret-right"><use xlink:href="#icon-caret-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></div><div class="r-grid-item r-flex-none"><a class="r-text-muted timeline-message-time" title="January 23rd 04:45:07 PM" href="/7457548f-20a0-4c1d-a56b-46bde24f3832/customers/cus_01HMW4HF2QMJZ3EJKEQ7T04TFQ#timeline-message-tmln_01HMW4HF3DK2M18WZ6XB4FVZE7">04:45 pm</a></div></div><!--v-if--></div></div>
                </div><!--v-if-->
              </div><!--v-if-->
            </div>
          </RTab>
          <RTab name="Segments">
            <div class="r-grid-fitted">
              <div class="r-grid-item">
                <RSelect class="r-mb-4" placeholder="Select segment" />
                <div class="tile">
                  <div class="tile-content r-inset-2">
                    <div class="r-grid-fitted r-justify-content-between">
                      <div class="r-grid-item">
                        <h3 class="r-d-inline-block r-mt-3 r-ml-4">Customers</h3>
                      </div>
                      <div class="r-grid-item r-flex-none">
                        <RButton class="r-inline-2" type="plain" icon-left="filter">Filters<span
                            class="segment-link-count r-ml-3">2</span></RButton>
                        <RButton class="r-inline-2" type="plain" icon-left="star-empty">Toggle starred</RButton>
                        <RButton class="r-inline-2" type="plain" icon-left="columns">Edit columns</RButton>
                        <RButton type="plain" icon-left="reset">Refresh</RButton>
                      </div>
                    </div>
                  </div>
                  <div class="tile-content r-pt-2 r-pr-5 r-pb-2 r-pl-5">
                    <div class="r-grid-fitted r-align-items-center">
                      <RCheckbox />
                      <span class="r-text-muted r-inline-4">0 rows selected</span>
                      <RButton class="r-inline-2" type="plain" icon-left="merge" :disabled="true">Merge duplicate
                        customers</RButton>
                    </div>
                  </div>
                  <div class="divider r-m-0"></div>
                  <RRepeater :provider="dataTableItems">
                    <template #headers>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Lifetime revenue</th>
                      <th>Last payment</th>
                      <th>Creation time</th>
                    </template>
                    <template #default="{ item }">
                      <tr>
                        <td>
                          <RCheckbox />
                        </td>
                        <td>
                          <RButton @click="router.push({ name: 'customer-details' })" type="unstyled">{{ item.name }}
                          </RButton>
                        </td>
                        <td>{{ item.email }}</td>
                        <td class="is-numeric">{{ item.lifetimeRevenue }}</td>
                        <td>{{ item.lastPayment }}</td>
                        <td>{{ item.creationTime }}</td>
                      </tr>
                    </template>
                  </RRepeater>
                </div>
              </div>
            </div>
          </RTab>
        </RTabs>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

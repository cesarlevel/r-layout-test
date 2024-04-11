<script setup>
import Title from '@/components/Title.vue';
import { RAvatar, RButton } from '@rebilly/revel';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="r-container-fluid">
    <Title title="$30.00" :show-badges="true" :primary-action="false" secondary-action="Query gateway" />
    <div class="r-d-flex stats">
      <div class="stat-item">
        <p class="r-text-muted">Processed on</p>
        <h3>Dec 15th, 2022 at 1:17 pm</h3>
      </div>
      <div class="stat-item">
        <p class="r-text-muted">Customer</p>
        <h3 class="r-text-primary r-cursor-pointer" @click="router.push({name: 'customer-details'})">John doe</h3>
      </div>
      <div class="stat-item">
        <p class="r-text-muted">Gateway</p>
        <h3 class="r-text-primary">Test processor</h3>
      </div>
      <div class="stat-item">
        <p class="r-text-muted">Website</p>
        <h3 class="r-text-primary">My awesome website</h3>
      </div>
      <div class="stat-item r-pr-3">
        <p class="r-text-muted">Payment instruments</p>
        <h3 class="r-d-inline-block r-mr-3">4111 11** **** 1111</h3>
        <RButton type="unstyled" class="r-button-fitted" size="small">Manage</RButton>
      </div>
    </div>
    <div class="r-grid">
      <div class="r-grid-item details">
        <div class="r-grid">
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Transaction details</h2>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Id</p>
                  <p class="id" v-tooltip="{ text: 'Copy id' }">payout-ZU6yD4nZm1NbGacEeeyZj</p>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Request id</p>
                  <p class="id" v-tooltip="{ text: 'Copy id' }">payout-ZU6yD4nZm1NbGacEeeyZj</p>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Created time</p>
                  <p class="r-text-muted">Dec 15th, 2022 at 1:17 pm</p>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Updated time</p>
                  <p class="r-text-muted">Dec 15th, 2022 at 1:17 pm</p>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Request amount</p>
                  <p class="r-text-muted">$50.00 USD</p>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Report amount</p>
                  <p class="r-text-muted">$50.00 USD</p>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Gateway account id</p>
                  <p class="id" v-tooltip="{ text: 'Copy id' }">ZU6yD4nZm1NbGacEeeyZj</p>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Customer id</p>
                  <p class="id" v-tooltip="{ text: 'Copy id' }">cus_ZU6yD4nZm1NbGacEeeyZj</p>
                </div>
                <div class="r-stack-5">
                  <p class="r-fw-medium">Gateway code and message</p>
                  <p>00 - Approved/Completed successfully or PIN verification is valid</p>
                </div>
                <RButton size="small">Show more</RButton>
              </div>
            </div>
          </div>
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>John Doe</h2>
                  <RButton type="plain" icon="actions" size="small"></RButton>
                </div>
                <p class="r-text-muted r-stack-3">Customer since a year ago</p>
                <p class="r-text-muted">John Doe</p>
                <p class="r-text-muted">34 Street</p>
                <p class="r-text-muted">12345, NY</p>
                <p class="r-text-muted">USA</p>
                <p class="r-text-muted">6547687789 (Main)</p>
                <p class="r-text-primary">johndoe@mail.com</p>
              </div>
              <div class="tile-content">
                <h3 class="r-stack-3">Billing address</h3>
                <p class="r-text-muted">Card Holder Name Card Holder Name</p>
                <p class="r-text-muted">94043</p>
                <p class="r-text-muted">USA</p>
              </div>
            </div>
          </div>
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Custom fields</h2>
                </div>
                <p class="r-text-muted">No custom field data available.</p>
              </div>
            </div>
          </div>
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Related invoices</h2>
                </div>
                <p class="r-text-muted">No related invoices were found</p>
              </div>
            </div>
          </div>
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Related transactions</h2>
                </div>
                <p class="r-text-muted">No related transactions were found</p>
              </div>
            </div>
          </div>
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>External identifiers</h2>
                </div>
                <p class="r-text-muted">No external identifiers were found</p>
              </div>
            </div>
          </div>
          <div class="r-grid-item r-grid-item-full">
            <div class="tile is-secondary">
              <div class="tile-content">
                <div class="tile-title r-stack-5 r-d-flex r-justify-content-between r-align-items-center">
                  <h2>Risk analysis</h2>
                </div>
                <div class="r-grid-fitted r-stack-6">
                  <div class="r-grid-item r-grid-item-full r-mb-2">
                    <div class="r-grid-fitted">
                      <div class="r-grid-item r-flex-none">
                        <RIcon icon="eye" />
                      </div>
                      <div class="r-grid-item r-pl-3">
                        <p>Risk score 0</p>
                      </div>
                    </div>
                  </div>
                  <div class="r-grid-item r-grid-item-full">
                    <div class="r-grid-fitted">
                      <div class="r-grid-item r-flex-none">
                        <RIcon icon="close-s" color="danger" />
                      </div>
                      <div class="r-grid-item r-pl-3">
                        <p>Billing country does not match the country where the order was placed.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <RButton size="small">Show complete analysis</RButton>
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
                  <div class="has-details timeline-message">
                    <div id="#message.anchorId" class="timeline-message-anchor"></div>
                    <div class="detailed-message is-active" entity="[object Object]">
                      <div class="r-grid-fitted r-grid-unstackable timeline-message-summary">
                        <div class="r-grid-item">
                          <div class="r-d-inline-block v-mask r-inline-3" style="max-width: 95%;">Customer redirected
                            offsite.</div><svg class="r-icon r-icon-20 r-is-rotating-right" data-testid="caret-right">
                            <use xlink:href="#icon-caret-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                          </svg>
                        </div>
                        <div class="r-grid-item r-flex-none"><a class="r-text-muted timeline-message-time"
                            title="April 3rd 12:34:35 PM"
                            href="/7457548f-20a0-4c1d-a56b-46bde24f3832/transactions/207#timeline-message-tmln_01HTJCZWRP9E3B9B5745RJHGQY">12:34
                            pm</a></div>
                      </div>
                      <table class="r-table timeline-details-content" message-type="customer-redirected-offsite">
                        <tbody>
                          <tr>
                            <td class="r-text-muted" width="50%"><span>Redirect URL</span></td>
                            <td class="r-wb-break-word">
                              <div>
                                https://sandbox-portal.secure-payments.app/payment/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJqd3RfMDFIVEpDWkcyRUs3OFhGNEpaWFNDRjNOWkIiLCJleHAiOjE3NDM2OTgwNjIsImlhdCI6MTcxMjE2MjA2Mi40MTQ5NSwiYWNsIjpbeyJzY29wZSI6eyJvcmdhbml6YXRpb25JZCI6WyI3NDU3NTQ4Zi0yMGEwLTRjMWQtYTU2Yi00NmJkZTI0ZjM4MzIiXSwicGF5bWVudE1ldGhvZHMiOlsiZWNoZWNrIl0sImN1c3RvbUZpZWxkTmFtZSI6WyJTSU5MYXN0NCJdfSwicGVybWlzc2lvbnMiOlsyODQsMjg2LDQxNCw0MTUsNDM0LDQxMSw0MTIsNDI0LDQyNSw0MjYsNDI3LDQyOCw0MjksNDA5LDQxMCw0MDEsNDAyLDQzMyw0ODgsNDg3LDY4Nyw2ODEsNjg3LDY4MSw2ODhdfV0sImNsYWltcyI6eyJ3ZWJzaXRlSWQiOiJteS1hd2Vzb21lLXdlYnNpdGUiLCJ0cmFuc2FjdGlvbklkIjoiMjA3IiwicGF5bWVudE1ldGhvZHMiOlsiZWNoZWNrIl19LCJtZXJjaGFudCI6Ijc0NTc1NDhmLTIwYTAtNGMxZC1hNTZiLTQ2YmRlMjRmMzgzMiIsImN1c3RvbWVyIjp7ImlkIjoiNzZjYzdmNGItMWJiZC00NjljLTg4OGMtMTE5YThjOTE2ZWE4IiwibmFtZSI6IkZpcnN0IExhc3QiLCJjcmVhdGVkVGltZSI6IjIwMTgtMDQtMDZUMjA6Mjk6NTIrMDA6MDAifX0.cS-iBzW4N4CJTleZt6FI8HN3Hio19T7C17Zf9q2GDApN6TAKlJ53N1lxY8PGz68rMG-yO-6mfEeD8swLF5Tghfws36WppoN0BvbhyQasdCbsQEzfvBFCl53EeWuRwHlM4CGNiK77WBIo-Wze2hu5Qg3bIImAVpK42gKrRCT8xLlBhn4hna04HVYEo1LJ-2tYM75HHMYaQJXeEi7yMcJHrBnbuj2MKeQhSS6UCTY6GkxxjDm8d8OeDgaeeIxIBFZPNhoA1DXSPyE2oil8U3_P04FGNDvPHUB2DUHWeHVLMZ8uIW7V7eZzuxRFQY1RfJr67Akw89fMrie74aW7ZKYBMw&amp;errorUrl=https%3A%2F%2Fsandbox.secure-payments.app%2FparamountEft%2Ferror%2F%3FtransactionId%3D207%26organizationId%3D7457548f-20a0-4c1d-a56b-46bde24f3832&amp;cancelUrl=https%3A%2F%2Fsandbox.secure-payments.app%2Fpayments%2Fcancel%2F207%2Fb951ec4ccddb448d80cbd284aed95d99%2F
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="r-text-muted" width="50%"><span>IP Address</span></td>
                            <td class="r-wb-break-word">
                              <div>96.127.225.2</div>
                            </td>
                          </tr>
                          <tr>
                            <td class="r-text-muted" width="50%"><span>User-Agent</span></td>
                            <td class="r-wb-break-word">
                              <div>Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like
                                Gecko) Chrome/123.0.0.0 Safari/537.36</div>
                            </td>
                          </tr>
                          <tr>
                            <td class="r-text-muted" width="50%"><span>Accept</span></td>
                            <td class="r-wb-break-word">
                              <div>
                                text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="r-text-muted" width="50%"><span>Accept-Language</span></td>
                            <td class="r-wb-break-word">
                              <div>en-US,en;q=0.9</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="timeline-message">
                    <div id="#message.anchorId" class="timeline-message-anchor"></div>
                    <div class="detailed-message" entity="[object Object]">
                      <div class="r-grid-fitted r-grid-unstackable timeline-message-summary">
                        <div class="r-grid-item">
                          <div class="r-d-inline-block v-mask r-inline-3" style="max-width: 95%;">The gateway account
                            requested event occurred and the following rules matched: sortTest.</div><!---->
                        </div>
                        <div class="r-grid-item r-flex-none"><a class="r-text-muted timeline-message-time"
                            title="April 3rd 12:34:22 PM"
                            href="/7457548f-20a0-4c1d-a56b-46bde24f3832/transactions/207#timeline-message-tmln_01HTJCZG1STVKR78NQR8TRD4VM">12:34
                            pm</a></div>
                      </div><!--v-if-->
                    </div>
                  </div>
                  <div class="has-details timeline-message">
                    <div id="#message.anchorId" class="timeline-message-anchor"></div>
                    <div class="detailed-message" entity="[object Object]">
                      <div class="r-grid-fitted r-grid-unstackable timeline-message-summary">
                        <div class="r-grid-item">
                          <div class="r-d-inline-block v-mask r-inline-3" style="max-width: 95%;">Transaction for $71.00
                            CAD was initiated and is waiting approval by TestProcessor.</div><svg
                            class="r-icon r-icon-20" data-testid="caret-right">
                            <use xlink:href="#icon-caret-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                          </svg>
                        </div>
                        <div class="r-grid-item r-flex-none"><a class="r-text-muted timeline-message-time"
                            title="April 3rd 12:34:22 PM"
                            href="/7457548f-20a0-4c1d-a56b-46bde24f3832/transactions/207#timeline-message-tmln_01HTJCZG2Q9ZPZB19DV0F7JYZ4">12:34
                            pm</a></div>
                      </div><!--v-if-->
                    </div>
                  </div>
                </div><!--v-if-->
              </div><!--v-if-->
            </div>
          </RTab>
          <RTab name="Webhook logs"></RTab>
          <RTab name="API logs"></RTab>
          <RTab name="Balance transactions"></RTab>
        </RTabs>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

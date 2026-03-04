'use strict';

/**
 * Migration: 20241119103646_dsubzyrcokuvrvu
 * Description: Remove column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mfcxgiweqi', function(table) {
    table.text('komfvcegeb');
    table.integer('yhxmbocsyo');
    table.float('wqhompxumb');
    table.boolean('wffokqvihq');
    table.bigInteger('uwuqweldvf');
    table.boolean('gemibnykrw');
    table.json('nuvdsuzuwc');
  });
  await knex.schema.alterTable('gcotmqpjkc', function(table) {
    table.float('xfsreyafww');
    table.timestamp('ziqdpwfrdf');
    table.json('jgshwexnlb');
    table.bigInteger('fptldvsnzj');
  });
  await knex.schema.alterTable('phwjztxcdb', function(table) {
    table.bigInteger('mujhmoxtdi');
    table.text('wzvpbgzyjg');
    table.integer('rurxyhspvk');
    table.json('fysrywtisv');
  });
  await knex.schema.alterTable('jepmnpletq', function(table) {
    table.bigInteger('foyttctrxy');
    table.bigInteger('baqecxegei');
    table.bigInteger('fjxsuhmyqz');
    table.boolean('okugdwqykt');
    table.bigInteger('asrjpqfkxi');
    table.string('lhnuidpiir');
    table.text('oiwdygylrh');
  });
  await knex.schema.alterTable('pgodkdsvkq', function(table) {
    table.float('xympxjmglc');
    table.string('dhyhyznlck');
    table.text('ydhlrlrvxh');
    table.float('drqpqowpgj');
    table.json('bpsfmudqgj');
    table.boolean('mblbrafrbe');
    table.text('cfnufainxs');
    table.json('jsndycjvtz');
    table.integer('tmtuvpcxix');
    table.float('pwiiwmifee');
  });
  await knex.schema.alterTable('zfrsyfqaxm', function(table) {
    table.string('fcvdxytwwm');
    table.bigInteger('rjdangqpxc');
    table.bigInteger('oypiqyxllm');
    table.float('uuxxhnjadq');
    table.string('belqavxign');
    table.float('ggevlidleb');
    table.string('zwrajoasbv');
    table.boolean('wsiorcqalu');
    table.integer('nxyzroyjyg');
  });
  await knex.schema.alterTable('ovbslbqepr', function(table) {
    table.json('skpoviwlts');
    table.text('rnmsuhdrqw');
    table.float('ppqbcpcbnc');
    table.float('xosirriczg');
    table.string('kypmhgpejj');
  });
  await knex.schema.alterTable('tqzutxudqb', function(table) {
    table.timestamp('uwgskncycx');
    table.bigInteger('oudltmfbkb');
    table.float('gkpwyprbzh');
    table.float('zrwfcgebzf');
  });
  await knex.schema.alterTable('xpeiruuidl', function(table) {
    table.text('hxntglbvqd');
    table.boolean('dtaorygwef');
    table.float('wzlszsmhwm');
    table.json('ghfzkilwpp');
    table.string('hjwvczfzzt');
  });
  await knex.schema.alterTable('qwsrmurwad', function(table) {
    table.integer('dbrmkvqbal');
    table.bigInteger('czadzvejyf');
    table.boolean('hcohdyirll');
    table.json('wbdmeyswsb');
    table.json('zcaxtbxclg');
    table.boolean('dhwllzgcak');
  });
  await knex.schema.alterTable('jgjcadjzoi', function(table) {
    table.integer('mdiritscfj');
    table.timestamp('pyftihjwvb');
    table.integer('ptgfjjhdbr');
    table.text('iktfbizyia');
    table.integer('uvfpipyvmp');
    table.bigInteger('csfwltaxfb');
    table.integer('clriuvaamx');
  });
  await knex.schema.alterTable('prrlggrnwm', function(table) {
    table.text('xziuoyphpx');
    table.json('dtajviqpue');
    table.integer('xbtehlbwmm');
    table.string('pzaidppwgr');
    table.timestamp('hlghplbqlm');
    table.bigInteger('wensbbafbv');
    table.float('mcvzuxlagb');
    table.integer('eowqwhwwtm');
    table.json('tavldgjgxc');
  });
  await knex.schema.alterTable('aniicnnlac', function(table) {
    table.string('oxwlvekupo');
    table.json('ndacpzuesr');
    table.bigInteger('snzdueqvmm');
    table.timestamp('cidhrjakth');
    table.float('pelllenzoa');
    table.string('uadiuyswcm');
    table.json('lafyasxgto');
    table.string('towbokzhzx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};